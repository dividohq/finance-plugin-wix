# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.5.3] - 2020-05-14

### Adds
- This changelog [@andiscrete](https://github.com/andiscrete).
- Version information to Gateway payload

## [0.5.2] - 2020-05-14

### Fixes
- Issue with Latin Extended-A letters not being recognised [@freddieline](https://github.com/freddieline).

## [0.5.1] - 2020-02-21

### Fixes
- Wix code change safeguarding the fetch function [@andiscrete](https://github.com/andiscrete).

## [0.5.0] - 2020-01-07

### Added
- 'Application' page [@andiscrete](https://github.com/andiscrete).
- Instructions on implementing 'Application' page to README [@andiscrete](https://github.com/andiscrete).

### Fixed
- Issue with cloning application objects [@andiscrete](https://github.com/andiscrete).
- Issue with cross domain redirection (Nordea quite rightfully finding issue with iFrames) [@andiscrete](https://github.com/andiscrete).

## [0.4.1] - 2019-12-03

### Added
- More information to the readme [@andiscrete](https://github.com/andiscrete).

### Changed
- Format change to readme (*bold* > _italics_) [@andiscrete](https://github.com/andiscrete).
- CustomerId var changed [@andiscrete](https://github.com/andiscrete).

### Fixed
- Issue with Gateway page sometimes displaying a blank screen if the onMessage listener wasn't ready [@andiscrete](https://github.com/andiscrete).
- Occasional cases of lightbox inception [@andiscrete](https://github.com/andiscrete).
- Finance option displaying on empty cart [@andiscrete](https://github.com/andiscrete).

### Removed
- Console logs [@andiscrete](https://github.com/andiscrete).
- GET /test endpoint function [@andiscrete](https://github.com/andiscrete).

## [0.4.0] - 2019-10-30
### Added
- Instructions to stop the payment overlay from closing when customer clicks away from the overlay [@andiscrete](https://github.com/andiscrete).
- Applies Wix coupon information to cart items [@andiscrete](https://github.com/andiscrete).

### Fixed
- Hardcoded currency replaced with dynamic system variables  [@andiscrete](https://github.com/andiscrete).

## [0.3.0] - 2019-10-22
### Added
- Currency code to Gateway payload [@andiscrete](https://github.com/andiscrete).
- Code for order completion page after customer application journey
- Instructions on implementing order completion page [@andiscrete](https://github.com/andiscrete).

## [0.2.2] - 2019-10-18
### Added
- Instructions to add order information to the 'Order Complete' page [@andiscrete](https://github.com/andiscrete).

## [0.2.1] - 2019-10-16
### Fixed
- The 'complete order' page amended to 'complete application' [@andiscrete](https://github.com/andiscrete).
- Documentation changed accordingly [@andiscrete](https://github.com/andiscrete).

## [0.2.0] - 2019-10-15
### Added
- Finance option now constrained to minimum and maximum cart totals [@andiscrete](https://github.com/andiscrete).

## [0.1.1] - 2019-10-01
### Fixed
- An issue with the finance payment option lightbox showing on page entry [@andiscrete](https://github.com/andiscrete).

## [0.1.0] - 2019-10-01
### Added
- Initial Build [@andiscrete](https://github.com/andiscrete).
