# Changelog

## [5.6.1](https://github.com/jonahsnider/convert/compare/v5.6.0...v5.6.1) (2024-11-01)


### Performance Improvements

* use closures instead of bound functions ([49699d6](https://github.com/jonahsnider/convert/commit/49699d680ad8db678e4022fb74abf4bf6edb6bd5))

## [5.6.0](https://github.com/jonahsnider/convert/compare/v5.5.1...v5.6.0) (2024-10-27)


### Features

* add getMeasureKind() function for validating inputs ([dd535cc](https://github.com/jonahsnider/convert/commit/dd535ccec9397dbe6218d28a6a02d3d9bdbaea98))

## [5.5.1](https://github.com/jonahsnider/convert/compare/v5.5.0...v5.5.1) (2024-10-24)


### Bug Fixes

* **volume:** improve definition of cubic yards conversion factor ([#695](https://github.com/jonahsnider/convert/issues/695)) ([5c526ad](https://github.com/jonahsnider/convert/commit/5c526ad3d6b8a102683608a536041b12d0c25eff))

## [5.5.0](https://github.com/jonahsnider/convert/compare/v5.4.1...v5.5.0) (2024-10-24)


### Features

* **mass:** add lbs as symbol for pounds ([84f8ce0](https://github.com/jonahsnider/convert/commit/84f8ce0ff262e52863b56bc5f0ed7475c81478bc)), closes [#693](https://github.com/jonahsnider/convert/issues/693)

## [5.4.1](https://github.com/jonahsnider/convert/compare/v5.4.0...v5.4.1) (2024-09-18)


### Bug Fixes

* **energy:** fix best array order ([#691](https://github.com/jonahsnider/convert/issues/691)) ([92f9b33](https://github.com/jonahsnider/convert/commit/92f9b3311aa77a6ee239df7838df58b966d06d4f))

## [5.4.0](https://github.com/jonahsnider/convert/compare/v5.3.0...v5.4.0) (2024-09-11)


### Features

* **energy:** update "best" array to use SI prefixed units ([#679](https://github.com/jonahsnider/convert/issues/679)) ([994fca7](https://github.com/jonahsnider/convert/commit/994fca792c1f34af61fbb45d338f2e1196e1d422))

## [5.3.0](https://github.com/jonahsnider/convert/compare/v5.2.0...v5.3.0) (2024-06-04)


### Features

* add a space separating quantity from unit when converting best conversion to string ([775d3c1](https://github.com/jonahsnider/convert/commit/775d3c169b5dfdfbd82815ec752d450045e35ce8)), closes [#665](https://github.com/jonahsnider/convert/issues/665)
* support spaces between quantity and unit in convertMany() and ms() ([8f7eb2d](https://github.com/jonahsnider/convert/commit/8f7eb2deb47c00c2b2b7a119b051f34581c93fb0))

## [5.2.0](https://github.com/jonahsnider/convert/compare/v5.1.0...v5.2.0) (2024-04-28)


### Features

* support "m" as an alias for minutes ([067a398](https://github.com/jonahsnider/convert/commit/067a398a6f41045586a2d11b95494cd0b5050421)), closes [#659](https://github.com/jonahsnider/convert/issues/659)

## [5.1.0](https://github.com/jonahsnider/convert/compare/v5.0.0...v5.1.0) (2024-04-24)


### Features

* **length:** add US survey foot unit ([25e1d47](https://github.com/jonahsnider/convert/commit/25e1d47c45ee0aff7a41cd9f8d5d2baee170a17e))

## [5.0.0](https://github.com/jonahsnider/convert/compare/v4.14.1...v5.0.0) (2024-02-19)


### ⚠ BREAKING CHANGES

* Exported types have changed, some have been removed. Some supported units were also removed.

### Features

* refactor for simplicity ([#647](https://github.com/jonahsnider/convert/issues/647)) ([e3757ae](https://github.com/jonahsnider/convert/commit/e3757ae32fdf99c11b44b517752856f3f9b52b8e))
