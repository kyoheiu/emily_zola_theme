# emily_zola_theme

![screenshot01](static/images/screenshot01.png)

A KISS theme for Zola (static site generator written in Rust). 

Features:
- simple & clean
- mobile-friendly
- MathJax support

Demo site is [here](https://emily-zola-theme.netlify.app/).

## Usage

```
cd YOUR_SITE_DIRECTORY/themes
git clone https://gitlab.com/kyoheiu/emily_zola_theme.git
```

and set the theme-name in `config.toml` to `emily_zola_theme`.

```
theme = "emily_zola_theme"
```

## example articles

In `YOUR_SITE_DIRECTORY/themes/emily_zola_theme/content`.

## MathJax support

![screenshot03](static/images/screenshot03.png)

To use MathJax, add these lines to the front matter in `.md` file. `[extra]` is mandatory:

```
[extra]
math = true
```

## How to customize
In addition to default values, there are 6 parts you can customize easily in this theme. Set your own in `config.toml`.
- author name (appears in footer)
- icon (appears in header)
- favicon
- header icon size (default width: 70px)
- top text in `index.html`
- number of posts in `index.html` (default 5)

## theme color
By default steelblue (`#4682B4`). To change, set your own in `sass/main.scss`.

```
$themecolor: #COLORHEX;
```