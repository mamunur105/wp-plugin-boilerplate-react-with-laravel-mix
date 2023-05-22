<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInite23796b8373a96b6bcf14eb8a6a35322
{
    public static $prefixLengthsPsr4 = array (
        'T' => 
        array (
            'TinySolutions\\boilerplate\\' => 26,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'TinySolutions\\boilerplate\\' => 
        array (
            0 => __DIR__ . '/../..' . '/app',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInite23796b8373a96b6bcf14eb8a6a35322::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInite23796b8373a96b6bcf14eb8a6a35322::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInite23796b8373a96b6bcf14eb8a6a35322::$classMap;

        }, null, ClassLoader::class);
    }
}
