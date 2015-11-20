# Strudel Folhadinho - Site

[![Build Status](https://travis-ci.org/wbruno/strudelfolhadinho.svg?branch=master)](https://travis-ci.org/wbruno/strudelfolhadinho)
[![node](https://img.shields.io/badge/node-5.1.0-brightgreen.svg)]()
[![GitHub release](https://img.shields.io/github/release/wbruno/strudelfolhadinho.svg)]()
[![License](http://img.shields.io/:license-mit-blue.svg)](https://github.com/wbruno/strudelfolhadinho/blob/master/LICENSE)

## Technologies in this project:
- NodeMailer 0.6.5
- Express 4.12.2


## Development

To start nodemon:
```
$ npm start
```

To run unit tests
```
$ npm test
```


## Production
Use the service located at `scripts/folhadinho.sh` into `/etc/init.d/folhadinho`

```
$ service folhadinho
Usage: /etc/init.d/folhadinho {start|stop|restart|status}
```

And the nginx config file `scripts/strudelfolhadinho.nginx`
