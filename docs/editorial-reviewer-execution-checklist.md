# MedQGo Editorial Reviewer Execution Checklist

## Goal

Publish a truthful editorial reviewer profile for MedQGo's NEET-UG Biology learning resources. This serves transparency and may support E-E-A-T trust signals.

> **重要澄清：** 具名审核人、Team 页面、30+ 内容页、站龄 2-4 周等**不是** Google AdSense 公布的固定门槛。这些是信任加分项，不是绕过内容质量或版权审核的通行证。AdSense 审核的核心是：原创且有价值的内容、合规的隐私政策、真实可达的联系方式。

## 1. Select a real reviewer

Choose someone who agrees to be publicly named and has a background that matches the role you plan to state.

Minimum public facts to collect:

- Full name used professionally.
- Accurate role, for example `Biology Content Reviewer` or `NEET Biology Educator`.
- A real degree or qualification that can be stated exactly, for example `M.Sc. Life Sciences`.
- Institution name and graduation year, if the reviewer agrees to publish them.
- A short factual biography of 40-80 words.
- The exact review scope, for example `Reviews NCERT concept accuracy for selected MedQGo revision notes`.
- Month and year when the review work starts.
- Optional public professional profile URL controlled by the reviewer.

Do not use a person who has not agreed to publication. Do not describe work that the reviewer does not actually perform.

## 2. Obtain written consent

Keep a signed or written confirmation outside this Git repository. It should confirm:

- The reviewer agrees that MedQGo may show their name, role, qualification, biography, and public profile URL.
- The reviewer confirms the qualification and biography are accurate.
- The reviewer agrees to the stated review scope.
- The reviewer can request an update or removal of their public profile.

Keep the following private and outside the project folder:

- Certificate scans or photos.
- Government ID documents.
- Signatures.
- Phone numbers, private email addresses, home address, or full private resume.

## 3. Define the actual review work

Before publishing the profile, agree on a narrow, real workflow:

1. Review newly written revision Notes for NCERT concept accuracy.
2. Mark unclear explanations and suggest corrections.
3. Review a recorded list of pages each month.
4. Report corrections through a shared document or email trail.

Avoid claims such as `reviewed all questions` unless the reviewer has actually checked all of them.

## 4. Fill the public profile file

Edit this file:

`/Users/liuzinan/Desktop/neetTk/neetug-biology-qbank/data/editorial-reviewer.json`

Example using fictional placeholders only. Replace every value with verified facts before saving:

```json
{
  "name": "Real Full Name",
  "role": "Biology Content Reviewer",
  "credentials": "M.Sc. Life Sciences",
  "institution": "Real University Name",
  "graduationYear": "2022",
  "bio": "Real Full Name reviews selected NCERT-aligned revision resources for clarity and concept accuracy.",
  "reviewScope": "Reviews NCERT concept accuracy for selected MedQGo revision notes.",
  "reviewedSince": "September 2026",
  "publicProfileUrl": "https://example.com/real-public-profile"
}
```

The Team page shows the individual profile only when `name`, `role`, `credentials`, and `reviewScope` are all filled.

## 5. Check the public wording

Allowed examples:

- `Reviewed by Real Full Name, M.Sc. Life Sciences`
- `Review scope: NCERT concept accuracy for selected revision notes.`
- `MedQGo is an independent study resource and is not affiliated with NCERT, NTA, or NEET.`

Do not claim:

- NCERT, NTA, NEET, government, or university affiliation unless it is current and authorised.
- Teaching years, exam ranks, institution employment, or credentials that cannot be verified.
- Review of all 348 questions unless that review is genuinely completed and documented.

## 5A. AdSense 合规检查（区分硬门槛与加分项）

### AdSense 实际硬门槛（必须满足）

| # | 检查项 | 合格标准 | 状态 |
|---|--------|---------|------|
| 1 | 隐私政策含广告声明 | 明确提到第三方广告、cookie 用于广告投放 | ✅ 已通过 |
| 2 | 联系方式真实可达 | 有真实邮箱（非纯表单） | ✅ 已通过 |
| 3 | 无虚假资质或关联 | 不声称 NCERT/NTA/政府/大学背书 | ✅ 已通过 |
| 4 | 原创且有价值的内容 | 内容非简单复制，有独特价值 | ⚠️ 题源授权风险仍需关注 |
| 5 | HTTPS + 自定义域名 | 站点安全且使用自有域名 | ✅ 已通过 |

### 信任加分项（非必须，但有帮助）

| # | 加分项 | 说明 | 当前状态 |
|---|--------|------|----------|
| 1 | 具名审核人 | 有真实成员、真实学历、本人同意、实际审核记录 | ❌ 暂无 |
| 2 | Team 页面展示审核人 | 显示审核人姓名、资质、审核范围 | 当前为中性披露 |
| 3 | 内容页审核署名 | 每篇底部 `Reviewed by ...` | ✅ 已有 Editorial Team byline |
| 4 | About 页面团队简介 | 说明谁在做这个站 | ✅ 已有 |
| 5 | Editorial Policy 流程说明 | 说明内容如何被创建和纠错 | ✅ 已有 |

> **注意：** 没有真实成员、学历、同意和审核记录的"团队资质声明"属于未证实背书，比不写更危险。宁可不写，不可虚写。

### 关于审核人资质的合规建议

**可以写的（真实即可）：**
- 学位：`M.Sc. Botany`、`M.Sc. Zoology`、`M.Sc. Life Sciences`、`Ph.D. Biology`
- 角色：`Biology Content Reviewer`、`NEET Biology Educator`、`Biology Subject Matter Expert`
- 审核范围：`Reviews NCERT concept accuracy for selected MedQGo revision notes`

**不能写的（即使真实也难以验证）：**
- `Former NCERT author` — 除非有可验证的公开记录
- `NEET topper` / `AIR 1` — 无法验证，且暗示官方关联
- `10+ years teaching at [institution]` — 除非该人确实在职且同意公开
- 任何暗示 NCERT/NTA/政府背书的表述

**当前状态（暂无具名审核人）：**
- Team 页面保持中性披露：说明 MedQGo 不虚构资质、不伪造背书
- About 页面说明产品定位和编辑流程
- Editorial Policy 页面说明自动化质量检查和纠错机制
- 所有内容页底部显示 `Reviewed by MedQGo Editorial Team`
- 如果未来有具名审核人，填写 `editorial-reviewer.json` 并重新部署即可

## 6. Publish and verify

After filling the profile file, run:

```bash
cd /Users/liuzinan/Desktop/neetTk/neetug-biology-qbank
source ~/.nvm/nvm.sh
nvm use 22
npm test
git add data/editorial-reviewer.json
git commit -m "Publish verified editorial reviewer profile"
git push origin main
```

After Vercel deploys, verify:

- `https://medqgo.com/team` shows the correct name, role, credentials, and review scope.
- No certificate, ID, phone number, or private email appears publicly.
- The profile wording matches the reviewer's written consent.

## 7. Maintain the record

Once each month, keep a private record of:

- Pages reviewed.
- Corrections requested and completed.
- Date of the latest review.
- Any profile update or consent change.

Update or remove the public profile promptly if the reviewer stops participating or requests removal.

## 8. AdSense 提审前最终检查

在提交 AdSense 申请前，确认以下**实际硬门槛**：

### 必须满足

- [x] `/privacy` 页面包含广告和 cookie 声明
- [x] `/contact` 页面有真实可达的邮箱
- [x] 无任何页面声称 NCERT/NTA/政府背书
- [x] HTTPS + 自定义域名
- [x] `/about`、`/editorial-policy`、`/team`、`/terms`、`/copyright` 页面存在
- [x] 内容页底部有审核署名（`Reviewed by MedQGo Editorial Team`）

### 仍需关注

- [ ] 题源授权风险：题库的公开展示、翻译改写、广告变现授权问题不在 E-E-A-T 文案范围内，需单独评估

### 加分项（非必须）

- [ ] 具名审核人（需真实成员 + 学历 + 同意 + 审核记录）
- [ ] 站点运行时间较长、内容页数量较多
