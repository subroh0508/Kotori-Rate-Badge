# Overview

![screenshot.png](https://github.com/subroh0508/Kotori-Rate-Badge/blob/master/doc/screenshot.png)

指定したGithubレポジトリのKotlin率をパーセント表記で可視化します。  
Kotori-Rateが100%のレポジトリは**実質小鳥さんそのもの**です。頑張って100%を目指しましょう💪

# Usage

下記をREADME.mdに書くだけ  
owner: Github ID  
repo: レポジトリ名  

現状Publicレポジトリのみ対応しています


```
![Kotori-rate](https://img.shields.io/badge/dynamic/json.svg?label=Kotori-Rate&colorB=fff98e&query=$.kotori_rate&uri=https%3A%2F%2Fasia-northeast1-kotori-badge.cloudfunctions.net%2Fbadge%3Fowner%3D${owner}%26repo%3${repo}&suffix=%)
```
