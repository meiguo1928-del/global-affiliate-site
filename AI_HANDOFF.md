# Tool Scout Lab — AI 交接文档（给 MacBook 上的新对话 AI）

> **给接手 AI 的第一句话：**  
> 请先完整阅读本文件，再开始任何操作。用户是缅甸华裔，只会中文，不懂英文。  
> 项目已通过 GitHub + Cloudflare 自动部署，**不要**让用户手动上传文件到 GitHub。  
> 你负责改代码；用户只在最后执行 `git push`（Mac 上用终端，Windows 上用 PowerShell）。

---

## 一、用户是谁 & 最终目标

| 项目 | 内容 |
|------|------|
| 身份 | 缅甸华裔，目前在斯里兰卡生活 |
| 语言 | 只会中文，用 AI 做翻译和多语言内容 |
| 短期目标 | 联盟营销月入 $500–$1000 |
| 长期目标 | 全球超级联盟客，月入 $10,000+ |
| 工作方式 | 一步一步、扎实细致、不违规、不欺骗用户、注重真实体验 |
| 品牌名 | **Tool Scout Lab**（已确定，不要再改名） |
| 域名 | https://toolscoutlab.com |
| 企业邮箱 | contact@toolscoutlab.com |

---

## 二、项目是什么

**Tool Scout Lab** = 全球多语言软件工具对比 / 购买指南站（联盟营销）

- 技术栈：Astro 静态站 + Markdown 文章 + Cloudflare Workers/Pages 部署
- 8 种语言：en, de, ja, fr, es, pt, th, vn
- 80 篇文章（10 个主题 × 8 语言），145 个页面
- **没有后台**，内容全是 Markdown 文件
- 赚钱方式：文章里的联盟链接（Hostinger、Surfshark、NordVPN 等）

---

## 三、关键路径 & 账号（Windows 和 Mac 通用）

| 项目 | 值 |
|------|-----|
| Windows 本地路径 | `F:\GlobalAffiliateProject` |
| GitHub 仓库 | `https://github.com/meiguo1928-del/global-affiliate-site.git` |
| 线上网站 | https://toolscoutlab.com |
| Cloudflare 项目名 | global-affiliate-site（Workers Builds，连 GitHub 自动部署） |
| 构建命令 | `npm run build` |
| 部署方式 | push 到 GitHub main 分支 → Cloudflare 自动构建部署 |

### 核心配置文件

| 文件 | 作用 |
|------|------|
| `src/config.ts` | 域名、邮箱、联盟链接（通过后替换这里） |
| `src/i18n/ui.ts` | 全站 8 语言界面文案 |
| `src/content/articles/*.md` | 所有文章 |
| `public/sitemap.txt` | Google 已提交的站点地图 |
| `AFFILIATE_APPLICATION_KIT.md` | 联盟申请英文答案模板 |
| `AFFILIATE_STATUS.md` | 联盟申请状态追踪 |

---

## 四、我们已经进行到哪里了（时间线摘要）

### 已完成 ✅

1. **网站从零搭建并上线**
   - Astro 多语言站，品牌 Tool Scout Lab
   - Cloudflare 部署，自定义域名 toolscoutlab.com
   - HTTPS 已开启（Always Use HTTPS）
   - 企业邮箱 contact@toolscoutlab.com（Cloudflare Email Routing）

2. **内容**
   - 80 篇多语言文章（地域定制，不是硬翻）
   - 主题：VPN、Hosting、AI 工具、Email Marketing、Website Builders、Canva/Semrush 替代品等
   - 最新新增：Jasper vs Copy.ai（8 语言，2026-06-17）

3. **SEO**
   - Google Search Console 已验证
   - 站点地图已提交（sitemap.txt，144+ 页）
   - 搜索 "toolscoutlab" 已在 Google 第一名
   - 优化了搜索标题/描述、favicon、Schema.org 结构化数据

4. **信任与合规**
   - Affiliate Disclosure 每篇文章 + 页脚
   - How We Test 页面（8 语言）
   - About 页面强化品牌定义
   - 联盟申请资料包 AFFILIATE_APPLICATION_KIT.md

5. **技术优化（最近几轮）**
   - 首页视觉信任感提升（hero、trust badges、卡片样式）
   - 文章页自动「相关指南」内链组件 RelatedGuides.astro
   - Google Analytics 代码已接入（等用户填 GA ID）
   - 修复 AI 文章误显示 VPN 按钮的问题

6. **Git 最新提交**
   ```
   65230e1 Add GA setup, Jasper vs Copy.ai articles, and auto internal linking
   d1e40a3 Optimize Google search display with SEO titles, favicon, and structured data
   2e8be81 Show homepage directly at root domain
   ```

### 正在进行中 ⏳

| 事项 | 状态 |
|------|------|
| Hostinger Affiliate 申请 | 2026-06-16 提交，审核中 |
| Surfshark Affiliate 申请 | 2026-06-16 提交，审核中 |
| 联盟链接替换进网站 | 等通过后改 `src/config.ts` 三行 |
| Google Analytics ID 填入 | 用户还没创建 GA4 属性 |
| Payoneer 收款账户 | 用户还没注册 |
| www.toolscoutlab.com | 还没在 Cloudflare 绑 www 子域名 |

### 明确不做 / 用户已决定 ❌

- **UI 大改科技感** → 用户决定先不动，优先联盟和变现
- **品牌改名** → 已定为 Tool Scout Lab，不要再改

---

## 五、当前最优先的待办（给接手 AI 的执行顺序）

### 用户自己做（AI 用中文指导即可）

1. 每天检查邮箱：Hostinger / Surfshark 审核结果
2. 注册 **Payoneer**（payoneer.com，护照 KYC）
3. 准备 KYC：缅甸护照、身份证、斯里兰卡签证、公司住宿证明信
4. 创建 **Google Analytics 4** → 拿到 `G-XXXXXXXXXX` → 写入项目 `.env`
5. 本周再申请：NordVPN Affiliate 或 Impact.com
6. Cloudflare 添加 `www.toolscoutlab.com` 自定义域名

### AI 可以继续做（不需要用户手动上传文件）

1. 联盟通过后：替换 `src/config.ts` 里的真实链接 → 让用户 push
2. 继续写高佣金对比文章（8 语言，地域定制）
3. 接入 GA ID 后验证统计是否正常
4. Bing Webmaster Tools 提交
5. 更多站内 SEO / 内链优化
6. 创建 W-8BEN 填写指南（美国联盟税务）

### 联盟通过后 5 分钟操作流程

```typescript
// src/config.ts — 只改这三行
export const AFFILIATE_LINKS = {
  surfshark: 'https://真实链接',
  nordvpn: 'https://真实链接',
  hostinger: 'https://真实链接',
};
```

然后用户执行 push，Cloudflare 自动部署，全站 CTA 按钮自动生效。

---

## 六、MacBook 能不能像 Windows 一样工作？（重要）

### 答案：**可以，而且应该这样做**

核心原则：**GitHub 是唯一的代码中转站**，不需要手动上传文件。

```
Windows Cursor AI 改代码 → git push → GitHub
                                              ↓
Mac Cursor AI 改代码 ← git pull ← GitHub
         ↓
    git push → GitHub → Cloudflare 自动部署 → toolscoutlab.com 更新
```

### MacBook 一次性设置（用户只需做一次）

```bash
# 1. 安装 Git（如果没装）
xcode-select --install

# 2. 克隆仓库到 Mac（选一个你喜欢的路径）
cd ~/Projects   # 或任意目录
git clone https://github.com/meiguo1928-del/global-affiliate-site.git
cd global-affiliate-site

# 3. 安装依赖
npm install

# 4. 用 Cursor 打开这个文件夹
# Cursor → File → Open Folder → 选择 global-affiliate-site
```

### Mac 上日常 workflow（和 Windows 一样）

| 步骤 | 谁做 | Mac 命令 |
|------|------|----------|
| 改代码、写文章、优化 | **AI 在 Cursor 里直接改** | 不需要用户操作 |
| 本地预览（可选） | AI 或用户 | `npm run dev` → 打开 localhost:4321 |
| 构建验证（可选） | AI | `npm run build` |
| 推送到 GitHub | **用户** | 见下方 |
| 线上部署 | **Cloudflare 自动** | 不需要操作 |

### Mac 推送命令（等同 Windows PowerShell）

```bash
cd ~/Projects/global-affiliate-site   # 改成你的实际路径
git add .
git commit -m "你的提交说明"
git push origin main
```

### 为什么 Mac 看不到 Windows 的对话记录？

- **Cursor 对话记录不跨设备同步**（同一账号也不行）
- 所以才有了这份 `AI_HANDOFF.md` 交接文件
- 解决办法：Mac 上新开对话，把本文件发给 AI，说：「请先读 AI_HANDOFF.md，从这里继续」

### 两台电脑切换时注意

```bash
# 在 Mac 开始工作前，先拉最新代码
git pull origin main

# 在 Windows 开始工作前，也先拉
git pull origin main
```

避免两台电脑代码冲突。

---

## 六-B、上班 Win + 下班 Mac 改代码口令卡（给用户的）

> **用户不懂技术，只靠这个流程 + pull/push 习惯即可。**  
> Cursor 对话记录 **不跨 Win/Mac 同步**；代码以 **GitHub** 为准。  
> **开工 pull，收工 push。**

### 每天只记 4 步

| 顺序 | 做什么 | 谁做 |
|------|--------|------|
| 1 | 用 Cursor 打开 **对的文件夹** | 用户 |
| 2 | **git pull**（拉 GitHub 最新代码） | 用户复制粘贴 |
| 3 | 让 **AI 改代码** | AI |
| 4 | **git push**（推上去，网站 1–3 分钟自动更新） | 用户复制粘贴 |

### 两个项目别搞混

| 网站 | Windows 文件夹 | Mac 文件夹 |
|------|----------------|------------|
| **Tool Scout Lab**（联盟站） | `F:\GlobalAffiliateProject` | `~/Projects/global-affiliate-site` |
| **霜雪商城**（另一个项目） | Win 上对应路径 | `/Applications/开发` |

改 Tool Scout Lab → 只打开 **global-affiliate-site**，不要和霜雪混在一个对话里。

### 场景 A：上班 — 工作电脑 Windows

1. Cursor → **文件 → 打开…** → `F:\GlobalAffiliateProject`
2. **开工**（PowerShell，复制粘贴）：

```powershell
cd F:\GlobalAffiliateProject
git pull origin main
```

3. 跟 AI 说话前可加这句：

```
我在 Windows 工作电脑上改 Tool Scout Lab，已经 git pull 过了。
请基于当前最新代码修改，另一台电脑做过的事不要重复改坏。
请先读 AI_HANDOFF.md。
```

4. AI 改完后 → **收工**（把引号里改成今天改了啥）：

```powershell
cd F:\GlobalAffiliateProject
git add .
git commit -m "今天改了什么"
git push origin main
```

5. **下班前必查**：今天改的都 push 了吗？没 push = 晚上 Mac 看不到。

### 场景 B：下班 — 私人 Mac

1. Cursor → **文件 → 打开…** → `/Users/libai/Projects/global-affiliate-site`
2. **开工**（终端，复制粘贴）：

```bash
cd ~/Projects/global-affiliate-site && git pull origin main
```

3. 跟 AI 说话前可加这句：

```
我在 Mac 私人电脑上改 Tool Scout Lab，已经 git pull 过了。
请基于当前最新代码修改，白天 Windows 上做过的事不要重复改坏。
请先读 AI_HANDOFF.md。
```

4. AI 改完后 → **收工**：

```bash
cd ~/Projects/global-affiliate-site
git add .
git commit -m "今晚改了什么"
git push origin main
```

5. **睡觉前必查**：今晚改的都 push 了吗？没 push = 明天 Win 看不到。

### Mac 本地预览（可选）

```bash
cd ~/Projects/global-affiliate-site
npm run dev
```

浏览器打开 http://localhost:4321/en/ ，看完在终端按 **Ctrl + C** 停止。

### Mac 环境（用户已完成 ✅）

- 项目路径：`~/Projects/global-affiliate-site`
- 已从 GitHub 克隆，`npm install` 已完成，本地预览正常
- Git 已配置：`MYINT SAW` / `contact@toolscoutlab.com`

### 给 AI 的提醒（读到这里请遵守）

- 用户开工前通常已 `git pull`；若不确定，先提醒用户 pull 再改
- **不要**把 Win 对话里的内容当事实；以 **当前仓库文件 + 本 HANDOFF** 为准
- 改完后只给用户 push 命令，**不要擅自 commit/push**（除非用户说「推送吧」）

---

## 七、给接手 AI 的操作规范（用户偏好）

1. **全部用中文和用户沟通**
2. **一步一步来**，不要跳步骤
3. **你直接改代码**，不要让用户手动上传文件到 GitHub
4. 改完后告诉用户运行 push 命令（Mac 用终端，Windows 用 PowerShell）
5. **不要擅自 git commit/push**，除非用户明确说「推送吧」
6. **不要改品牌名** Tool Scout Lab
7. 新文章必须 **8 语言 + 地域定制**（不是硬翻）
8. 联盟内容必须合规：披露联盟关系、不虚假亲测、不欺骗
9. 用户是缅甸居民，W-8BEN 填缅甸/斯里兰卡真实地址，不勾选税务协定优惠

---

## 八、项目结构速查

```
GlobalAffiliateProject/
├── src/
│   ├── config.ts              ← 站点配置 + 联盟链接
│   ├── i18n/ui.ts             ← 8 语言 UI 文案
│   ├── content/articles/      ← 所有 Markdown 文章
│   ├── components/            ← Header, SEO, RelatedGuides, GoogleAnalytics
│   ├── layouts/               ← BaseLayout, ArticleLayout
│   └── pages/[lang]/          ← 路由页面
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.txt            ← GSC 提交的地图
│   └── google验证文件.html
├── AFFILIATE_APPLICATION_KIT.md
├── AFFILIATE_STATUS.md
├── AI_HANDOFF.md              ← 本文件
├── .env.example               ← GA ID 配置示例
├── astro.config.mjs
├── package.json
└── wrangler.jsonc
```

---

## 九、联盟链接当前状态

```typescript
// src/config.ts — 目前全是占位符，等审核通过
surfshark: 'https://YOUR-SURFSHARK-AFFILIATE-LINK'  // ⏳ 已申请
hostinger: 'https://YOUR-HOSTINGER-AFFILIATE-LINK'  // ⏳ 已申请
nordvpn:   'https://YOUR-NORDVPN-AFFILIATE-LINK'    // ❌ 未申请
```

`isRealAffiliateLink()` 函数会自动判断：占位符时显示「审核中」提示，真实链接时显示购买按钮。

---

## 十、对话历史关键决策记录

| 日期 | 决策 |
|------|------|
| 2026-06 | 从「全球联盟网站」改名为 **Tool Scout Lab** |
| 2026-06 | 买域名 toolscoutlab.com，绑定 Cloudflare |
| 2026-06 | 站点地图改用静态 sitemap.txt（解决 Cloudflare XML 500 错误） |
| 2026-06 | 72→80 篇文章，新增 Jasper vs Copy.ai |
| 2026-06 | Google 搜索优化：独立 SEO 标题、favicon、结构化数据 |
| 2026-06 | UI 科技感优化 → 用户决定**先不做**，优先联盟 |
| 2026-06-16 | 提交 Hostinger + Surfshark 联盟申请 |
| 2026-06-17 | 接入 GA 代码、自动内链、联盟状态追踪文档 |
| 2026-06-17 | Mac 环境搭建完成；本文件新增「六-B 上班 Win + 下班 Mac 口令卡」 |

---

## 十一、发给 AI 的启动指令（Win / Mac 通用，用户直接复制粘贴）

```
请先阅读项目根目录的 AI_HANDOFF.md（尤其第六节和六-B 口令卡），了解 Tool Scout Lab 全部背景。

我们正在进行全球联盟营销，网站已上线 https://toolscoutlab.com。
Hostinger 和 Surfshark 联盟正在审核中。

我已经 git pull 过了。请基于当前最新代码修改，不要重复改坏另一台电脑做过的事。

请从这里继续：
1. 确认你已读完 AI_HANDOFF.md
2. 告诉我当前项目状态和下一步建议
3. 后续你直接改代码，我只在最后 git push

不要让我手动上传文件到 GitHub。
```

---

## 十二、常见问题

**Q: Mac 需要重新创建项目吗？**  
A: 不需要。`git clone` 仓库即可，代码和 Windows 完全一样。

**Q: Mac 需要重新部署 Cloudflare 吗？**  
A: 不需要。Cloudflare 连的是 GitHub 仓库，哪台电脑 push 都一样。

**Q: 对话记录能同步吗？**  
A: 不能。用本文件交接。

**Q: npm 在 Mac 上怎么装？**  
A: `brew install node` 或去 nodejs.org 下载 LTS 版。

**Q: 本地预览？**  
A: `npm run dev` → http://localhost:4321/en/

---

*文档最后更新：2026-06-17*  
*Windows 工作区：F:\GlobalAffiliateProject*  
*Mac 工作区：~/Projects/global-affiliate-site*
