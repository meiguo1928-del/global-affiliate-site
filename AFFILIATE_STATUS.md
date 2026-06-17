# Tool Scout Lab 联盟申请状态追踪

> 最后更新：2026-06-17  
> 网站：https://toolscoutlab.com  
> 联系邮箱：contact@toolscoutlab.com

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
