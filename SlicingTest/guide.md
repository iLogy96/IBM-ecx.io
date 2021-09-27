# sass - guidelines/

– abstracts (utilities)/
| |– \_variables.scss # Sass Variables
| |– \_functions.scss # Sass Functions
| |– \_mixins.scss # Sass Mixins
| |– \_placeholders.scss # Sass Placeholders
|
|– base/
| |– \_reset.scss # Reset/normalize
| |– \_typography.scss # Typography rules
| … # Etc.
|
|– components/
| |– \_buttons.scss # Buttons
| |– \_carousel.scss # Carousel
| |– \_cover.scss # Cover
| |– \_dropdown.scss # Dropdown
| |– \_media.scss # MediaQuerry
| … # Etc.
|
|– layout/
| |– \_navigation.scss # Navigation
| |– \_grid.scss # Grid system
| |– \_header.scss # Header
| |– \_footer.scss # Footer
| |– \_sidebar.scss # Sidebar
| |– \_forms.scss # Forms
| … # Etc.
|
|– pages/
| |– \_home.scss # Home specific styles
| |– \_contact.scss # Contact specific styles
| … # Etc.
|
|– themes/
| |– \_theme.scss # Default theme
| |– \_admin.scss # Admin theme
| … # Etc.
|
|– vendors/
| |– \_bootstrap.scss # Bootstrap
| |– \_jquery-ui.scss # jQuery UI
| … # Etc.
|
`– main.scss # Main Sass file

# IDEALLY WILL LOOK LIKE

@import 'abstracts/variables';
@import 'abstracts/functions';
@import 'abstracts/mixins';
@import 'abstracts/placeholders';

@import 'vendors/bootstrap';
@import 'vendors/jquery-ui';

@import 'base/reset';
@import 'base/typography';

@import 'layout/navigation';
@import 'layout/grid';
@import 'layout/header';
@import 'layout/footer';
@import 'layout/sidebar';
@import 'layout/forms';

@import 'components/buttons';
@import 'components/carousel';
@import 'components/cover';
@import 'components/dropdown';

@import 'pages/home';
@import 'pages/contact';

@import 'themes/theme';
@import 'themes/admin';
