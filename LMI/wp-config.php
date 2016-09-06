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

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'mathonet_wordpress873');

/** MySQL database username */
define('DB_USER', 'mathonet_word873');

/** MySQL database password */
define('DB_PASSWORD', 'yRfY89Xuu3US');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', ')<YjF@k}$x/hzhCs@ID+&$yQEkUAy!A*qQ[^?}omwB[Vl=*ivQT_Qmv/q[cMsjQQ>!}{dL;McFBkwot!s|/$XxP$|kYHwe_&p%hwO[=o&ferEPnp]{YFE=i^OJmkGCMG');
define('SECURE_AUTH_KEY', 'BJkCnFhb<qoQgso*o<_+=n@-)wR$;](pulnz[]ssTgkYRT>I$w+b(szIg$pemEn}]J_sTljM%=S^|JuGZGX[KmXGMbj%QjLdMBhribw<uVSWXOOMFtI{w%nJX)eXMP]v');
define('LOGGED_IN_KEY', 'E--LsxqT(a&im&|daybw;UEnlrwYN>|I&zbyOe*PdyYdvb}X&}z;M)+_DrfSfO(_PkJ*^dBClXt!=PAI]DV[IJjxBdtddiS|BxU))qEvNWNm?/fAT<;|WL(Bj{Wj-g$i');
define('NONCE_KEY', 'J&=M/nm@J+lx*-u@e?bpx{vFDCShnHQ&<!/}ArbdK%s==COQc%=jBm+*i(waCtWuaJl*)h!_+kxTvaB+MZH+^ulmGp}!o%yDL<_&icQl=uJwsCx-KnTyEv<*=E+kPcNw');
define('AUTH_SALT', ')V>xaEx>]auzu(dx{<<bQ}[?J=M[Z(MCWR)=h=hgq^gX@gaM(R^ip(_AMIuIi]&*-eYzFJ*e-%G__vpD;=]be_ZcTIqjQo[&>wR++j}WGuD-%@]ral>EtWaaHlxIUa(G');
define('SECURE_AUTH_SALT', ')u?/k{?KCW/oOjaV}UbE|}]!ZMk$!{|d}[AwX]<^n^L)&_}H!euSpUbvmJw*=cd_@$xH_f}np)}*$i|i@SsQZ<Ab*dYD[OhM[g!_>dh]&rb=mxea<KjZcS_^aiO=MUA@');
define('LOGGED_IN_SALT', 'C!IA=m=NHUGCOYF([Y]>d@Ugvth?@vq|{bBR{uYDXtbxKe(+SwvsXvgnZv}W</bJMa{*CM=RTbz-pK=IgT{ZxkvrGa}G*%I&SbgT)V/Qx!R)cJqA]to<KyjuNzikkx@}');
define('NONCE_SALT', 'tAqqHY>!Oke-HbM?u)ai$An}cciBnzD|zwS=l!)]M!;}n/*fBR$pC?^j(]c&m[N<v;H$kufjODF$@OQUM;{wQWBCOIi;MC!wKEaYeS_DFCA-PKeUO+Ckw@c_w{Uk!I-L');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_ekyk_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
