// TODO: SEO img alt and title
// TODO: SEO prerender
// TODO: img preload

(function() {
    var magicWidth = 360;
    var magicFactor = 0.75;

    angular
        .module('Hellowiktor', [])
        .controller('PageController', function($scope, $timeout, $interval, $window) {
            $scope.pages = [{
                name: 'projects',
                items: [{
                        title: 'Zwack Unicum',
                        sub: 'Redesign',
                        color: '#b85',
                        img: {
                            cover: '01-zwack-unicum-cover-hellowiktor.png',
                            study: '01-zwack-unicum-case-study-hellowiktor.png'
                        }
                    },
                    {
                        title: 'Pressanybutton',
                        sub: 'News Site',
                        color: '#2af',
                        img: {
                            cover: '02-pressanybutton-cover-hellowiktor.png',
                            study: '02-pressanybutton-case-study-hellowiktor.png'
                        }
                    },
                    {
                        title: 'Infinitepaper',
                        sub: 'Reader Platform',
                        color: '#f43',
                        img: {
                            cover: '03-infinitepaper-cover-hellowiktor.png',
                            study: '03-infinitepaper-case-study-hellowiktor.png'
                        }
                    },
                    {
                        title: 'We Change',
                        sub: 'Branding',
                        color: '#2b7',
                        img: {
                            cover: '04-we-change-cover-hellowiktor.png',
                            study: '04-we-change-case-study-hellowiktor.png'
                        }
                    },
                    {
                        title: 'Passion',
                        sub: 'Digital Art',
                        color: '#c3d',
                        img: {
                            cover: '05-passion-cover-hellowiktor.png',
                            study: '05-passion-case-study-hellowiktor.png'
                        }
                    },
                    {
                        title: 'Vogue Timeline',
                        sub: 'Web Design',
                        color: '#f47',
                        img: {
                            cover: '06-vogue-timeline-cover-hellowiktor.png',
                            study: '06-vogue-timeline-case-study-hellowiktor.png'
                        }
                    },
                    {
                        title: 'The Phantom Pain',
                        sub: 'Web Design',
                        color: '#e22',
                        img: {
                            cover: '07-the-phantom-pain-cover-hellowiktor.png',
                            study: '07-the-phantom-pain-case-study-hellowiktor.png'
                        }
                    },
                    {
                        title: 'The News',
                        sub: 'App Design',
                        color: '#2af',
                        img: {
                            cover: '08-the-news-cover-hellowiktor.png',
                            study: '08-the-news-case-study-hellowiktor.png'
                        }
                    },
                    {
                        title: 'Rolls-Royce',
                        sub: 'Web Design',
                        color: '#b85',
                        img: {
                            cover: '09-rolls-royce-cover-hellowiktor.png',
                            study: '09-rolls-royce-case-study-hellowiktor.png'
                        }
                    },
                    {
                        title: 'Chronos',
                        sub: 'Concept',
                        color: '#2af',
                        img: {
                            cover: '10-chronos-cover-hellowiktor.png',
                            study: '10-chronos-case-study-hellowiktor.png'
                        }
                    },
                    {
                        title: 'Billy Idol',
                        sub: 'Web Design',
                        color: '#e22',
                        img: {
                            cover: '11-billy-idol-cover-hellowiktor.png',
                            study: '11-billy-idol-case-study-hellowiktor.png'
                        }
                    },
                    {
                        title: 'L’Oréal it LOOK',
                        sub: 'Facebook Campaign',
                        color: '#ee0',
                        img: {
                            cover: '12-loreal-it-look-cover-hellowiktor.png',
                            study: '12-loreal-it-look-case-study-hellowiktor.png'
                        }
                    },
                    {
                        title: 'Sock Dart Fleece',
                        sub: 'Microsite Concept',
                        color: '#f47',
                        img: {
                            cover: '13-sock-dart-fleece-cover-hellowiktor.png',
                            study: '13-sock-dart-fleece-case-study-hellowiktor.png'
                        }
                    },
                    {
                        title: 'Cope & Arnold',
                        sub: 'Web Design',
                        color: '#b85',
                        img: {
                            cover: '14-cope-_-arnold-cover-hellowiktor.png',
                            study: '14-cope-_-arnold-case-study-hellowiktor.png'
                        }
                    },
                    {
                        title: 'X-Men: Apocalypse',
                        sub: 'Web Design',
                        color: '#2af',
                        img: {
                            cover: '15-x-men-apocalypse-cover-hellowiktor.png',
                            study: '15-x-men-apocalypse-case-study-hellowiktor.png'
                        }
                    },
                    {
                        title: 'Black',
                        sub: 'App Design',
                        color: '#444',
                        img: {
                            cover: '16-black-cover-hellowiktor.png',
                            study: '16-black-case-study-hellowiktor.png'
                        }
                    },
                    {
                        title: 'Bloodborne',
                        sub: 'Web Design',
                        color: '#b85',
                        img: {
                            cover: '17-bloodborne-cover-hellowiktor.png',
                            study: '17-bloodborne-case-study-hellowiktor.png'
                        }
                    },
                    {
                        title: 'Janis Sne',
                        sub: 'Web Design',
                        color: '#f47',
                        img: {
                            cover: '18-janis-sne-cover-hellowiktor.png',
                            study: '18-janis-sne-case-study-hellowiktor.png'
                        }
                    },
                    {
                        title: 'Gamer365',
                        sub: 'Redesign',
                        color: '#f43',
                        img: {
                            cover: '19-gamer365-cover-hellowiktor.png',
                            study: '19-gamer365-case-study-hellowiktor.png'
                        }
                    },
                    {
                        title: 'Inside Out',
                        sub: 'Web Design',
                        color: '#ee0',
                        img: {
                            cover: '20-inside-out-cover-hellowiktor.png',
                            study: '20-inside-out-case-study-hellowiktor.png'
                        }
                    },
                    {
                        title: 'Flipn.Watch',
                        sub: 'Product Design',
                        color: '#2af',
                        img: {
                            cover: '21-flipn.watch-cover-hellowiktor.png',
                            study: '21-flipn.watch-case-study-hellowiktor.png'
                        }
                    },
                    {
                        title: 'Guilty Gear Xrd',
                        sub: 'Web Design',
                        color: '#e22',
                        img: {
                            cover: '22-guilty-gear-xrd-cover-hellowiktor.png',
                            study: '22-guilty-gear-xrd-case-study-hellowiktor.png'
                        }
                    }
                ]
            }];

            var projects = $scope.pages[0].items;
            for (var index = 0; index < projects.length; index++) {
                projects[index].img._loaded = 0;
            }

            $scope.activePage = $scope.pages[0];
            $scope.activeClass = 'all';

            $scope.isTouchDevice = 'ontouchstart' in document.documentElement || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);

            // Force scrollbar on Mac to support scrolling with Magic Mouse
            if (/Mac/.test(navigator.platform)) {
                $scope.isTouchDevice = true;
                // $scope.isTouchDevice = !/Firefox|Chrome/.test(navigator.userAgent);
                // $scope.isTouchDevice = !/iPad|iPhone|iPod|Firefox|Chrome/.test(navigator.userAgent);
                // $scope.forceEnableWheel = true;
            }

            $scope.isLoading = true;
            $scope.isInitializing = true;
            $scope.isViktorVisible = false;

            $scope.wasThereUserActivity = false;

            $scope.showViktor = function() {
                window.onScroll({ keyCode: 0x24 });
                window.onScroll({ keyCode: $scope.isViktorVisible ? 0x24 : 0x25 });

                $scope.isViktorVisible = !$scope.isViktorVisible;
            };

            $scope.showStudy = function(index) {
                var project = $scope.activePage.items[index];

                $scope.study = {
                    index: index,
                    url: project.img.study,
                    title: project.title
                };
            };

            $scope.hideStudy = function(immediately) {
                $scope.study.close = true;

                $timeout(function() { delete $scope.study }, immediately ? 0 : 250);
            };

            $scope.init = function() {
                var shakeyTask;

                $scope.isLoading = false;

                var introduce = function() {
                    var row = document.querySelector('.introduction h1 div:not(.show)');

                    if (row) {
                        row.classList.add('show');

                        $timeout(introduce, magicWidth * magicFactor);
                    } else {
                        $scope.isInitializing = false;

                        if (!$scope.isTouchDevice) {
                            shakeyTask = $interval(shakeyShakey, 10000);
                        }
                    }
                };

                var shakeyShakey = function() {
                    if (!$scope.isInitializing) {
                        if (!$scope.wasThereUserActivity) {
                            $scope.shake = !$scope.study;

                            $timeout(function() {
                                $scope.shake = false;
                                $scope.wasThereUserActivity = true;
                            }, 1000);
                        } else {
                            $interval.cancel(shakeyTask);
                        }
                    }
                };

                $timeout(introduce, 1000);
            };

            $scope.init();
        }).directive('scrollable', function($document, $timeout) {
            var accumulator = 0;
            var lastScreenX = 0;
            var scrollPosition = 0;

            return {
                restrict: 'A',
                link: function($scope, $element, $attrs) {
                    var onScroll = function(event) {
                        var raw = $element[0];
                        var scrollWidth = raw.offsetWidth;
                        var windowWidth = window.innerWidth;
                        var scrollMax = scrollWidth - windowWidth - magicWidth;
                        var movementX = event.movementX || event.mozMovementX;

                        movementX = movementX || (event.screenX - lastScreenX);

                        if ($scope.isInitializing || $scope.study) {
                            return;
                        }

                        if (event.type === 'mousemove') {
                            accumulator += movementX;

                            if (Math.abs(accumulator) >= magicWidth * magicFactor) {
                                scrollPosition += accumulator > 0 ? magicWidth : -magicWidth;
                                accumulator = 0;
                            }

                            lastScreenX = event.screenX;
                        }

                        if ((event.deltaY || event.wheelDelta) > 0 || event.keyCode == 0x27 || event.keyCode == 0x28) {
                            scrollPosition -= magicWidth;
                        } else if ((event.deltaY || event.wheelDelta) < 0 || event.keyCode == 0x25 || event.keyCode == 0x26) {
                            scrollPosition += scrollPosition > 0 ? 0 : magicWidth;
                            scrollPosition -= scrollPosition % magicWidth;
                        }

                        if (event.keyCode == 0x24) {
                            scrollPosition = 0;
                            $element.parent()[0].scrollLeft = 0;
                        }

                        if (event.keyCode == 0x23) {
                            scrollPosition = -scrollMax;
                        }

                        if (scrollPosition > magicWidth) {
                            scrollPosition = magicWidth;
                        }

                        if (Math.abs(scrollPosition) > scrollMax) {
                            scrollPosition = -scrollMax;
                        }

                        $element.css('transform', 'translateX(' + (scrollPosition) + 'px)');

                        if (scrollPosition) {
                            $scope.wasThereUserActivity = true;
                        }
                    };

                    window.onScroll = onScroll;

                    if (!$scope.isTouchDevice || $scope.forceEnableWheel) {
                        $element.bind('wheel', onScroll);

                        $document.bind('mousedown', function(event) {
                            lastScreenX = event.screenX;

                            $document.bind('mousemove', function(event) {
                                onScroll(event);
                            });

                            $document.bind('click', function(event) {
                                event.preventDefault();
                                event.stopPropagation();

                                return false;
                            });
                        });

                        $document.bind('mouseup', function(event) {
                            $document.unbind('mousemove');
                            $document.unbind('click');
                        });

                        $document.bind('keydown', onScroll);
                        $document.bind('keydown', function(event) {
                            if (event.keyCode === 0x1B) {
                                $scope.hideStudy(true);
                            }

                            if (event.keyCode === 0x09) {
                                event.preventDefault();
                            }
                        });

                        angular.element(document.querySelector('footer')).on('wheel', onScroll);
                    }
                }
            };
        }).directive('study', function($document, $window) {
            return {
                restrict: 'A',
                link: function($scope, $element, $attrs) {
                    var onScroll = function(event) {
                        var elem = $element[0];
                        var aside = document.getElementsByTagName('aside')[0];
                        var asideHeight = aside.offsetWidth;
                        var height = elem.scrollHeight - $window.innerHeight * 1.5 - 110;

                        if (elem.scrollTop >= height && $scope.study) {
                            $scope.$apply(function() {
                                $scope.hideStudy();
                            });
                        }
                    };

                    $document.bind('keydown', onScroll);

                    $element.bind('wheel', onScroll);
                    $element.bind('scroll', onScroll);
                    $element.bind('click', function(event) {
                        $scope.hideStudy(true);
                    });
                }
            }
        }).directive('project', function($document, $timeout) {
            var isAnimationInProgress = null;

            return {
                restrict: 'A',
                link: function($scope, $element, $attrs) {
                    var element = angular.element($element[0].querySelectorAll('.cover'));

                    element.on('mouseenter', function() {
                        element.addClass('hover');

                        isAnimationInProgress = $timeout(function() {}, 500);
                    });

                    element.on('mouseleave', function() {
                        isAnimationInProgress.then(function() {
                            if (!$scope.study) {
                                element.removeClass('hover');
                            }
                        });
                    });

                    $scope.$watch('study.close', function(newValue) {
                        if (newValue === true) {
                            element.removeClass('hover');
                        }
                    });

                    element.on('click', function() {
                        element.addClass('hover');
                    });
                }
            }
        });

})();

function toggleFullScreen() {
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
}
