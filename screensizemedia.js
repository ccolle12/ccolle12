
(function() {
    'use strict';

    
    const MOBILE_BREAKPOINT = 480;
    const TABLET_BREAKPOINT = 768;
    let currentScreenType = null;

    // Apply  
    function MediaQuery(width) {
        let screenType;
        if (width < MOBILE_BREAKPOINT) {
            screenType = 'mobile';
        } else if (width < TABLET_BREAKPOINT) {
            screenType = 'tablet';
        } else {
            screenType = 'desktop';
        }

        // Only update if screen type changed
        if (currentScreenType === screenType) return;
        
        currentScreenType = screenType;

        if (screenType === 'mobile') {
            phoneStyles();
        } else if (screenType === 'tablet') {
            tabletStyles();
        } else {
            computerStyles();
        }

        console.log('Screen Type: ' + (screenType === 'mobile' ? 'Mobile (<480px)' : screenType === 'tablet' ? 'Tablet (480px-767px)' : 'Desktop (≥768px)'));
    }

    // phone styles and accessibility styles
    function phoneStyles() {
        const body = document.body;
        const form = document.getElementById('my_survey');
        const resultDiv = document.getElementById('survey-result');
        const img = document.querySelector('img[src="computers.jpg"]');
        const h1 = document.querySelector('h1');
        const h2 = document.querySelector('h2');
        const inputs = document.querySelectorAll('input[type="text"], input[type="radio"], input[type="checkbox"]');
        const buttons = document.querySelectorAll('input[type="submit"], input[type="button"]');
        const labels = document.querySelectorAll('label');

        // Body 
        body.style.fontSize = '13px';

        // Image 
        if (img) {
            img.style.maxWidth = '100%';
            img.style.width = '100%';
            img.style.height = 'auto';
        }

        // Header
        if (h1) {
            h1.style.fontSize = '120%';
            h1.style.margin = '8px 0';
        }
        if (h2) {
            h2.style.fontSize = '115%';
            h2.style.margin = '8px 0';
        }

        // Form 
        if (form) {
            form.style.padding = '8px';
            form.style.maxWidth = '100%';
        }

        // touch sizes
        inputs.forEach(input => {
            input.style.padding = '5px';
            input.style.fontSize = '13px';
            input.style.marginRight = '6px';
        });

        // Button for phone format
        buttons.forEach(button => {
            button.style.display = 'block';
            button.style.width = '100%';
            button.style.padding = '12px 10px';
            button.style.fontSize = '13px';
            button.style.marginBottom = '8px';
            button.style.cursor = 'pointer';
            button.style.borderRadius = '4px';
        });

        // Label format
        labels.forEach(label => {
            label.style.fontSize = '13px';
            label.style.lineHeight = '1.3';
            label.style.display = 'block';
            label.style.marginBottom = '5px';
        });

        // Result 
        if (resultDiv) {
            resultDiv.style.fontSize = '13px';
            resultDiv.style.marginTop = '15px';
            resultDiv.style.padding = '8px';
            resultDiv.style.wordWrap = 'break-word';
            resultDiv.style.overflowWrap = 'break-word';
        }

        // Nav
        const taskbar = document.querySelector('.taskbar');
        if (taskbar) {
            const ul = taskbar.querySelector('ul');
            const lis = taskbar.querySelectorAll('li');
            const as = taskbar.querySelectorAll('a');

            if (ul) {
                ul.style.padding = '0';
                ul.style.margin = '0';
                ul.style.display = 'flex';
                ul.style.flexWrap = 'wrap';
            }

            lis.forEach(li => {
                li.style.display = 'inline-block';
                li.style.margin = '2px 1px';
                li.style.flex = '1 1 45%';
            });

            as.forEach(a => {
                a.style.padding = '5px 4px';
                a.style.fontSize = '11px';
                a.style.display = 'block';
                a.style.textAlign = 'center';
            });
        }
    }

    // tablet styles
    function tabletStyles() {
        const body = document.body;
        const form = document.getElementById('my_survey');
        const resultDiv = document.getElementById('survey-result');
        const img = document.querySelector('img[src="computers.jpg"]');
        const h1 = document.querySelector('h1');
        const h2 = document.querySelector('h2');
        const inputs = document.querySelectorAll('input[type="text"], input[type="radio"], input[type="checkbox"]');
        const buttons = document.querySelectorAll('input[type="submit"], input[type="button"]');
        const labels = document.querySelectorAll('label');

        // Body
        body.style.fontSize = '14px';

        // Image
        if (img) {
            img.style.maxWidth = '600px';
            img.style.width = '100%';
            img.style.height = 'auto';
        }

        // Header
        if (h1) {
            h1.style.fontSize = '160%';
            h1.style.margin = '12px 0';
        }
        if (h2) {
            h2.style.fontSize = '130%';
            h2.style.margin = '12px 0';
        }

        // Form
        if (form) {
            form.style.padding = '15px';
            form.style.maxWidth = '100%';
        }

        // Input sizes
        inputs.forEach(input => {
            input.style.padding = '7px';
            input.style.fontSize = '14px';
            input.style.marginRight = '7px';
        });

        // Buttons
        buttons.forEach(button => {
            button.style.display = 'inline-block';
            button.style.width = 'auto';
            button.style.padding = '10px 15px';
            button.style.fontSize = '14px';
            button.style.marginRight = '8px';
            button.style.marginBottom = '5px';
            button.style.cursor = 'pointer';
            button.style.borderRadius = '4px';
        });

        // Labels
        labels.forEach(label => {
            label.style.fontSize = '14px';
            label.style.lineHeight = '1.4';
            label.style.display = 'inline';
            label.style.marginBottom = '0';
        });

        // Result
        if (resultDiv) {
            resultDiv.style.fontSize = '14px';
            resultDiv.style.marginTop = '20px';
            resultDiv.style.padding = '12px';
            resultDiv.style.backgroundColor = '#f9f9f9';
            resultDiv.style.borderRadius = '4px';
            resultDiv.style.wordWrap = 'break-word';
            resultDiv.style.overflowWrap = 'break-word';
        }

        // Nav
        const taskbar = document.querySelector('.taskbar');
        if (taskbar) {
            const ul = taskbar.querySelector('ul');
            const lis = taskbar.querySelectorAll('li');
            const as = taskbar.querySelectorAll('a');

            if (ul) {
                ul.style.padding = '8px';
                ul.style.margin = '0';
                ul.style.display = 'flex';
                ul.style.flexWrap = 'wrap';
            }

            lis.forEach(li => {
                li.style.display = 'inline-block';
                li.style.margin = '2px 1px';
                li.style.flex = '1 1 auto';
            });

            as.forEach(a => {
                a.style.padding = '8px';
                a.style.fontSize = '13px';
                a.style.display = 'block';
                a.style.textAlign = 'center';
            });
        }
    }
    
    function computerStyles() {
        const body = document.body;
        const form = document.getElementById('my_survey');
        const resultDiv = document.getElementById('survey-result');
        const img = document.querySelector('img[src="computers.jpg"]');
        const h1 = document.querySelector('h1');
        const h2 = document.querySelector('h2');
        const inputs = document.querySelectorAll('input[type="text"], input[type="radio"], input[type="checkbox"]');
        const buttons = document.querySelectorAll('input[type="submit"], input[type="button"]');
        const labels = document.querySelectorAll('label');

        // Body
        body.style.fontSize = '16px';

        // Image 
        if (img) {
            img.style.maxWidth = '700px';
            img.style.width = '100%';
            img.style.height = 'auto';
        }

        // Header
        if (h1) {
            h1.style.fontSize = '200%';
            h1.style.margin = '15px 0';
        }
        if (h2) {
            h2.style.fontSize = '145%';
            h2.style.margin = '15px 0';
        }

        // Form 
        if (form) {
            form.style.padding = '20px';
            form.style.maxWidth = '900px';
            form.style.margin = '0 auto';
        }

        
        inputs.forEach(input => {
            input.style.padding = '8px';
            input.style.fontSize = '16px';
            input.style.marginRight = '8px';
        });

        // Button 
        buttons.forEach(button => {
            button.style.display = 'inline-block';
            button.style.width = 'auto';
            button.style.padding = '10px 20px';
            button.style.fontSize = '16px';
            button.style.marginRight = '10px';
            button.style.marginBottom = '0';
            button.style.cursor = 'pointer';
            button.style.borderRadius = '4px';
        });

        
        labels.forEach(label => {
            label.style.fontSize = '16px';
            label.style.lineHeight = '1.5';
            label.style.display = 'inline';
            label.style.marginBottom = '0';
        });

        // Result
        if (resultDiv) {
            resultDiv.style.fontSize = '16px';
            resultDiv.style.marginTop = '25px';
            resultDiv.style.padding = '15px';
            resultDiv.style.backgroundColor = '#f5f5f5';
            resultDiv.style.borderRadius = '4px';
        }

        // Nav
        const taskbar = document.querySelector('.taskbar');
        if (taskbar) {
            const ul = taskbar.querySelector('ul');
            const lis = taskbar.querySelectorAll('li');
            const as = taskbar.querySelectorAll('a');

            if (ul) {
                ul.style.padding = '10px';
                ul.style.margin = '0';
                ul.style.display = 'flex';
                ul.style.flexWrap = 'nowrap';
            }

            lis.forEach(li => {
                li.style.display = 'inline-block';
                li.style.margin = '0';
                li.style.marginRight = '5px';
                li.style.flex = 'none';
            });

            as.forEach(a => {
                a.style.padding = '10px';
                a.style.fontSize = '15px';
                a.style.display = 'inline-block';
                a.style.textAlign = 'left';
            });
        }
    }

    // Resize
    function handleResize() {
        const width = window.innerWidth;
        MediaQuery(width);
    }

    // Initialize 
    function start() {
        
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', handleResize);
        } else {
            handleResize();
        }

        
        window.addEventListener('resize', handleResize);

        
        window.addEventListener('orientationchange', function() {
            setTimeout(handleResize, 100);
        });
    }

    
    window.getMediaQueryState = function() {
        return {
            currentScreenType: currentScreenType,
            windowWidth: window.innerWidth,
            mobileBreakpoint: MOBILE_BREAKPOINT,
            tabletBreakpoint: TABLET_BREAKPOINT,
            isMobile: currentScreenType === 'mobile',
            isTablet: currentScreenType === 'tablet',
            isDesktop: currentScreenType === 'desktop'
        };
    };

    // Start media query handler
    start();
})();
