<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'nicolasdewert' );

/** MySQL database username */
define( 'DB_USER', 'wp' );

/** MySQL database password */
define( 'DB_PASSWORD', 'wp' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'G{&8YGcs ;M=^.D%oN]jrF]VPU+m;q~X^L@WG`Mg~KkDZMvfC6#xiHGSwN*J2Xo2' );
define( 'SECURE_AUTH_KEY',  '1Czu`g Y2Ot<7AKqgLPp`Elv7xalU[[70g03J4*jJl$gb#pHG;zX_k%Z<-lPc.M6' );
define( 'LOGGED_IN_KEY',    '`7ii`)[gG763?GOh9YG3~0U@kUY5?H?:$;V+8vQIMo~ 3V|7:qLfL!iCK+KH)Vo0' );
define( 'NONCE_KEY',        'jbkWx![DXZL!lBtTp:+:FxmS1cJ|aOl=14|?DMzmBYT7Wqy04;^eTHxue[$Y9=ZW' );
define( 'AUTH_SALT',        ' LnouSqRADUy2h{suFS!Y!%vaBa9sew -Rg,)D;>,]3+@d=@`a9Bc}i[@]w*OV?b' );
define( 'SECURE_AUTH_SALT', 'd:en8UF|6&e^8vy(3(D0z`szI=}i25;~.Fc{:C P{SOZ18dGn2(x2/Pgs}9uK1Lo' );
define( 'LOGGED_IN_SALT',   '$QTs(kJPG<PJ=iJ2~YSm^#>/Nk+~L@`[FGU1~Vpx1n<`?;[SA<v+ G]+sWVTr#0_' );
define( 'NONCE_SALT',       'Zh o7Zq0-ADgez*DRa+9h> U>+5k<VU^Cdl{6EiW0mm(1YtlZ1&;bt39=-lBJGDD' );

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


define( 'WP_DEBUG', true );


/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) )
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
