# Tool Scout Lab 联盟申请状态追踪

> 最后更新：2026-06-17  
> 网站：https://toolscoutlab.com  
> 联系邮箱：contact@toolscoutlab.com

## 品牌 ↔ 文章 ↔ 联盟对照表（重要）

对比文章里**可以写很多品牌**，但**赚钱只靠你有联盟链接的那几个**。  
文章底部 CTA 按钮只会链到你已申请的联盟产品。

| 品牌 | 网站里哪些文章提到 | 联盟状态 | 你怎么赚钱 |
| --- | --- | --- | --- |
| **Hostinger** | Hostinger vs Bluehost / SiteGround，Hosting 分类 | ⏳ 审核中 | 文章 CTA → Hostinger 链接 → 用户购买 → 佣金 |
| **Surfshark** | NordVPN vs Surfshark，Best Cheap VPN | ⏳ 审核中 | 文章 CTA → Surfshark 链接 |
| **NordVPN** | NordVPN vs Surfshark，Best Cheap VPN | ❌ 未申请 | 通过后 CTA 可加 NordVPN 按钮 |
| Bluehost | Hostinger vs Bluehost | 未申请（暂不需要） | 仅作对比参考，CTA 仍指向 Hostinger |
| SiteGround | Hostinger vs SiteGround | 未申请（暂不需要） | 仅作对比参考，CTA 仍指向 Hostinger |
| Jasper | Jasper vs Copy.ai，AI 写作指南 | 未申请 | 以后通过 PartnerStack / Impact 申请 |
| Copy.ai | Jasper vs Copy.ai，AI 写作指南 | 未申请 | 同上 |
| Semrush | Semrush 替代品 | 未申请 | 写「替代品」文章，推你能联盟的工具 |
| Canva | Canva 替代品 | 未申请 | 替代品文章，不必联盟 Canva 本身 |

### 核心原则（避免写错方向）

1. **优先写 Hostinger / Surfshark / NordVPN 相关对比** — 这三个是你已申请或即将申请的。
2. **对比文章里的「输家」不需要联盟** — 例如 Hostinger vs SiteGround，SiteGround 只是对比对象，按钮推 Hostinger 即可。
3. **「替代品」文章推便宜的替代方案** — 不必联盟 Semrush / Canva 本身。
4. **精 > 多** — 先把 3 个核心品牌的旗舰文章做好（加截图教程），比再写 20 篇纯文字更有用。

### 下一步建议申请的联盟（按优先级）

| 优先级 | 平台/品牌 | 申请入口 | 原因 |
| --- | --- | --- | --- |
| 1 | NordVPN | nordvpn.com/affiliate | 你已有 2 篇 VPN 对比文 |
| 2 | Impact.com | impact.com | 一个平台申请多个 SaaS/VPN 品牌 |
| 3 | PartnerStack | partnerstack.com | Jasper、Copy.ai 等 AI 工具较多 |
| 4 | SiteGround | siteground.com/affiliates | 可选，你已有对比文 |

## 截图教程指南（你自己可以做）

视频和截图**联盟品牌方有时会提供**（登录联盟后台 → Banners / Assets / Media Kit），但：

- 素材通常是广告横幅，**不适合**做「逐步对比教程」
- 很多品牌不提供教程视频
- **最靠谱：你自己截图** — 打开官网定价页、注册流程，用 Mac 截图（`Shift + Command + 4`）

### 合规注意

- ✅ 可以截：公开定价页、功能对比表、你自己测试的界面
- ✅ 可以说：「根据官方定价页（2026年6月）」「基于公开信息对比」
- ❌ 不要说：「我亲测了 3 个月」除非你真的测试过
- ❌ 不要用：品牌官方 Logo 视频当自己的「评测视频」

### 旗舰文章建议截图（Hostinger vs SiteGround 示例）

| 序号 | 截什么 | 保存文件名 |
| --- | --- | --- |
| 1 | Hostinger 定价页（显示首年价 + 续费价） | `hostinger-pricing-2026.webp` |
| 2 | SiteGround 定价页（同上） | `siteground-pricing-2026.webp` |
| 3 | Hostinger 控制面板首页 | `hostinger-dashboard-2026.webp` |
| 4 | 两家的 WordPress 一键安装界面对比 | `wordpress-install-compare-2026.webp` |

保存到：`public/images/guides/`  
截好后告诉我，我帮你嵌进文章。

## 当前申请状态

| 平台 | 申请日期 | 状态 | 后台链接 | 通过后动作 |
| --- | --- | --- | --- | --- |
| Hostinger Affiliate | 2026-06-16 | ⏳ 审核中 | hostinger.com/affiliates | 复制链接 → 更新 `src/config.ts` 的 `hostinger` |
| Surfshark Affiliate | 2026-06-16 | ⏳ 审核中 | surfshark.com/affiliates | 复制链接 → 更新 `src/config.ts` 的 `surfshark` |
| Payoneer | 未申请 | ❌ 待做 | payoneer.com | 注册收款账户，很多联盟付款需要 |
| NordVPN Affiliate | 未申请 | ❌ 待做 | nordvpn.com/affiliate | 通过后更新 `nordvpn` 链接 |
| Impact | 未申请 | ❌ 待做 | impact.com | 申请多个 SaaS/VPN 品牌 |
| PartnerStack | 未申请 | ❌ 待做 | partnerstack.com | AI 工具联盟较多 |

## 通过后 5 分钟替换链接流程

1. 登录联盟后台，找到你的专属推广链接（tracking link）
2. 打开 `F:\GlobalAffiliateProject\src\config.ts`
3. 替换对应字段
4. `npm.cmd run build` 验证
5. `git push origin main` 推送
6. Cloudflare 自动部署后，文章页 CTA 按钮自动变成真实联盟链接

完整英文回答见：`AFFILIATE_APPLICATION_KIT.md`

## KYC 材料 checklist

- [ ] 缅甸护照身份页（清晰照片）
- [ ] 缅甸身份证正面 / 反面
- [ ] 斯里兰卡签证页
- [ ] 公司住宿证明信（含斯里兰卡地址）
- [ ] 所有文件姓名拼写一致

## 税务提醒（美国联盟）

- 缅甸居民无美国税务协定优惠
- 通过后填写 **W-8BEN**，地址如实填当前居住地址
