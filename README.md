# image-divider

[![npm version](https://badge.fury.io/js/image-divider.svg)](http://badge.fury.io/js/image-divider)
[![Build Status](https://travis-ci.org/kjirou/image-divider.svg?branch=master)](https://travis-ci.org/kjirou/image-divider)

Divide a large image to small images


## Preparation
### Install imagemagick
This npm-module depends on [imagemagick](http://www.imagemagick.org/) CLI tools.

e.g. Mac with Homebrew:
```
brew install imagemagick
```

e.g. Debian:
```
sudo apt-get install imagemagick
```

Assert ImageMagick is installed:
```
$convert --version
Version: ImageMagick 6.8.7-7 Q16 x86_64 2013-11-27 http://www.imagemagick.org
Copyright: Copyright (C) 1999-2014 ImageMagick Studio LLC
Features: DPC Modules
Delegates: bzlib freetype jng jpeg ltdl png xml zlib
```
