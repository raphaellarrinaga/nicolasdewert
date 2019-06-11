/**
 * @file
 */

(function () {
  // eslint-disable-next-line strict.
  'use strict';

  var gulp = require("gulp"),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano'),
    livereload = require('gulp-livereload'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    sassGlob = require('gulp-sass-glob'),
    imagemin = require('gulp-imagemin'),
    newer = require('gulp-newer'),
    path = require('path'),
    sourcemaps = require('gulp-sourcemaps'),
    bourbon = require('bourbon'),
    neat = require('node-neat').includePaths,
    sass = require('gulp-sass');

  // Put this after including our dependencies
  var paths = {
    styles: {
      // By using styles/**/*.sass we're telling gulp to check all folders for any sass file
      src: "sass/**/*.scss",
      // Compiled files will end up in whichever folder it's found in (partials are not compiled)
      dest: "css"
    },
    images: {
      src: 'images/',
      dest: 'images/'
    },
  };

  // Error notifications with notify.
  const reportError = error => {
    notify.onError({
      title: 'Gulp error in ' + error.plugin,
      message: error.toString()
    })(error);
  };

  // Define tasks after requiring dependencies
  function style() {
    return gulp
      .src(paths.styles.src)
      .pipe(plumber(reportError))
      .pipe(sourcemaps.init())
      .pipe(sassGlob())
      .pipe(
        sass({
          precision: 2,
          outputStyle: 'compressed',
          // includePaths: [].concat('node_modules/mappy-breakpoints')
          includePaths: [].concat(
            bourbon.includePaths,
            neat,
            'node_modules/mappy-breakpoints'
          )
        })
      )
      .pipe(postcss([autoprefixer(), cssnano()]))
      // .pipe(sourcemaps.write())
      // .pipe(ext_replace('.min.css', '.css'))
      .on('error', sass.logError)
      .pipe(gulp.dest(paths.styles.dest))
      .pipe(livereload());
  }

  exports.style = style;

  // Optimize Images.
  function images() {
    return gulp
      .src(paths.images.src)
      .pipe(newer(paths.images.dest))
      .pipe(
        imagemin([
          imagemin.gifsicle({ interlaced: true }),
          imagemin.jpegtran({ progressive: true }),
          imagemin.optipng({ optimizationLevel: 5 }),
          imagemin.svgo({
            plugins: [
              {
                removeViewBox: false,
                collapseGroups: true
              }
            ]
          })
        ])
      )
      .pipe(gulp.dest(paths.images.dest));
  }

  exports.images = images;

  const fractal = require('@frctl/fractal').create();
  const mandelbrot = require('@frctl/mandelbrot');
  const twigAdapter = require('@frctl/twig');

  const myCustomisedTheme = mandelbrot({
    panels: ['notes', 'html', 'view', 'context', 'resources', 'info'],
    skin: 'black',
    static: {
      mount: 'theme'
    }
  });

  // Add an additional static assets path.
  // @see https://github.com/frctl/fractal/issues/122
  const imgDir = path.join(__dirname, '/images');
  const staticImages = 'images';
  myCustomisedTheme.addStatic(imgDir, staticImages);

  // Tell Fractal to use the configured theme by default.
  fractal.web.theme(myCustomisedTheme);
  // Title for the project.
  fractal.set('project.title', 'Living Styleguide');
  fractal.docs.set('path', `${__dirname}/styleguide-src/docs`); // location of the documentation directory.
  // Destination for the static export.
  fractal.web.set('builder.dest', 'styleguide');
  fractal.web.set('static.path', `${__dirname}/css`);
  // Browsersync.
  fractal.web.set('server.sync', true);
  // Location of the component directory.
  fractal.components.set('path', `${__dirname}/styleguide-src/components`);
  // Let Fractal know that this preview layout should be used as the default layout for our components.
  fractal.components.set('default.preview', '@preview');
  // Set default components status to work in progress. This has to be overridden in component.config.js files.
  fractal.components.set('default.status', 'wip');

  // Use Twig intead of handlebars.js.
  fractal.components.engine(twigAdapter);
  fractal.components.set('ext', '.twig');

  /*
   * Start the Fractal server.
   *
   * In this example we are passing the option 'sync: true' which means that it will
   * use BrowserSync to watch for changes to the filesystem and refresh the browser automatically.
   * Obviously this is completely optional!
   *
   * This task will also log any errors to the console.
   */

  function fractalWatch() {
    const server = fractal.web.server({
      sync: true
    });
    server.on('error', err => logger.error(err.message));
    return server.start().then(() => {
      logger.success(`Fractal server is now running at ${server.url}`);
    });
  }

  /*
   * Run a static export of the project web UI.
   *
   * This task will report on progress using the 'progress' event emitted by the
   * builder instance, and log any errors to the terminal.
   *
   * The build destination will be the directory specified in the 'builder.dest'
   * configuration option set above.
   */

  function fractalBuild() {
    const builder = fractal.web.builder();
    builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'));
    builder.on('error', err => logger.error(err.message));
    return builder.build().then(() => {
      logger.success('Fractal build completed!');
    });
  }

  // Keep a reference to the fractal CLI console utility.
  const logger = fractal.cli.console;

  function watchFiles() {
    livereload.listen();
    gulp.watch(paths.styles.src, style);
    // gulp.watch(paths.scripts.src, handleThemeJs);
  }

  exports.watchFiles = watchFiles;

  const watch = gulp.parallel(watchFiles, fractalWatch, images);
  exports.watch = watch;
  const build = gulp.series(style, images);
  exports.build = build;

}());
