# emily_zola_theme

![screenshot01](images/screenshot01.png)

A KISS theme for Zola (static site generator). 
features:
- simple, clean
- mobile-friendly
- MathJax support

## Usage

```
cd YOUR_SITE_DIRECTORY/themes
git clone https://gitlab.com/kyoheiu/emily_zola_theme.git
```

And set the theme-name in `config.toml` to `emily_zola_theme`.

```
theme = "emily_zola_theme"
```

## example articles

![screenshot02](images/screenshot02.png)

In `YOUR_SITE_DIRECTORY/themes/emily_zola_theme/content`.

## MathJax support

![screenshot03](images/screenshot03.png)

To use MathJax, insert these lines in the front matter of `.md` file:

```
[extra]
math = true
```

## How to customize
In addition to default values, there are 6 parts you can customize easily in this theme, by setting your own under `[extra]` in `config.toml`.
- author name (appears in footer)
- icon (appears in header)
- favicon
- header icon size (default width: 70px)
- top text in `index.html` (you can delete it by editing `index.html`!)
- number of posts in `index.html` (default 5)

## theme color
By default steelblue (#4682B4). To change, you can set your own in `sass/main.scss`.

```
$themecolor: #4682b4;
```