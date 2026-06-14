# Tool Scout Lab — 全球软件工具比较多语言站

> 中文操作指南。你用中文决策，网站内容面向全球用户。

## 项目结构

```
affiliate-site/
├── src/config.ts          ← 改域名、邮箱、联盟链接
├── src/content/articles/  ← 新增文章（Markdown）
├── src/i18n/ui.ts         ← 各语言界面文案
└── src/pages/[lang]/      ← 自动路由：/en/ /de/ /es/ /ja/ /th/
```

## 第一步：安装依赖

```powershell
cd affiliate-site
npm install
npm run dev
```

浏览器打开 http://localhost:4321/en/ 预览英文首页。

| 命令 | 含义 |
|------|------|
| `npm run dev` | 本地开发预览 |
| `npm run build` | 构建静态文件到 `dist/` |
| `npm run preview` | 预览构建结果 |

## 第二步：必改配置（注册平台前完成）

编辑 `src/config.ts`：

```typescript
export const SITE = {
  name: '你的网站名',
  url: 'https://你的域名.com',      // 部署后的真实域名
  email: 'contact@你的域名.com',
};

export const AFFILIATE_LINKS = {
  surfshark: 'https://...',  // NordVPN/Impact 后台复制的链接
  nordvpn: 'https://...',
  hostinger: 'https://...',
};
```

同步修改 `astro.config.mjs` 里的 `site` 和 `public/robots.txt` 里的 Sitemap 地址。

## 第三步：部署到 Cloudflare Pages（免费）

1. 把 `affiliate-site` 文件夹推到 GitHub（新建仓库即可）
2. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
3. 构建设置：
   - **Build command**（构建命令）: `npm run build`
   - **Build output directory**（输出目录）: `dist`
   - **Root directory**（根目录）: `affiliate-site`（若仓库根目录就是本项目则留空）
4. 部署完成后把自定义域名绑上去

## 第四步：注册联盟平台（用本网站 URL）

按此顺序申请（网站上线后再提交，通过率更高）：

| 顺序 | 平台 | 注册地址 | 备注 |
|------|------|----------|------|
| 1 | Payoneer | payoneer.com | 收款中枢，护照 KYC |
| 2 | Involve Asia | involve.asia | Publisher 注册，填网站 URL |
| 3 | Impact | impact.com | Partners → Sign up |
| 4 | NordVPN Affiliate | nordvpn.com/affiliate | 全球 GEO |
| 5 | Hostinger | hostinger.com/affiliates | 建站联盟 |

## 第五步：新增一篇文章

1. 用中文写好大纲
2. 让 AI 生成 `src/content/articles/en-xxx.md`（复制 `en-best-cheap-vpn-2026.md` 格式）
3. 再生成 `de-xxx.md`、`es-xxx.md` 等
4. `npm run build` 重新部署

### 文章 frontmatter 模板

```yaml
---
title: "文章标题"
description: "SEO 描述，155字以内"
lang: en
date: 2026-06-13
permalink: your-article-slug
alternates:
  de: german-slug
  es: spanish-slug
keywords:
  - keyword1
  - keyword2
---
```

## 已上线页面

| 语言 | 首页 | VPN 评测 |
|------|------|----------|
| 英语 en | /en/ | /en/best-cheap-vpn-2026/ |
| 德语 de | /de/ | /de/beste-guenstige-vpn-2026/ |
| 西语 es | /es/ | （待添加文章） |
| 日语 ja | /ja/ | （待添加文章） |
| 泰语 th | /th/ | （待添加文章） |

合规页：各语言 `/about/` `/contact/` `/privacy/` 已就绪。

## Google Search Console

1. 访问 [search.google.com/search-console](https://search.google.com/search-console)
2. **添加资源** → 输入你的域名
3. 用 DNS 或 HTML 文件验证
4. **站点地图** 提交：`https://你的域名.com/sitemap.xml`

## 本周任务清单（第 1 周）

- [ ] 改 `config.ts` 域名和联盟链接
- [ ] `npm run build` 成功
- [ ] 部署 Cloudflare Pages
- [ ] 注册 Payoneer + Involve Asia + Impact
- [ ] 用 AI 扩写 es/ja/th 三语 VPN 文章
- [ ] 提交 Google Search Console

## 重要提醒

- **不要**用 VPN 伪造美国身份注册平台
- 联盟链接必须加 `rel="nofollow sponsored"`（模板已内置）
- 无美国税务协定：填 W-8BEN 时如实填缅甸地址，不勾选条约优惠
