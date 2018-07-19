# timeline

https://nianlu.github.io/timeline

[MET Timeline of Art History](https://www.metmuseum.org/toah/chronology/)
[Oxford Timelines of World Art](http://www.oxfordartonline.com/page/timelines-of-world-art)

## References
[Deploying a Next.js app into GitHub Pages](https://github.com/zeit/next.js/wiki/Deploying-a-Next.js-app-into-GitHub-Pages)

[Next.js / GitHub Pages](https://medium.com/@anotherplanet/git-tips-next-js-github-pages-2dbc9a819cb8)


### Quick Nots
"deploy": "next build && next export && git add out/ && git commit -m \"Deploy gh-pages\" && git subtree push --prefix out origin gh-pages"

git subtree split --prefix out master
git push origin 4a6d48ed29499906182ede520f422d99ffee88e4:gh-pages --force
