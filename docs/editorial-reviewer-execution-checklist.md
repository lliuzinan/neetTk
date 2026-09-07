# MedQGo Editorial Reviewer Execution Checklist

## Goal

Publish a truthful editorial reviewer profile for MedQGo's NEET-UG Biology learning resources. This serves both transparency and **Google AdSense E-E-A-T compliance** (Experience, Expertise, Authoritativeness, Trustworthiness).

> **AdSense 审核要点：** Google 要求内容型网站展示"谁在审核内容"。一个有真实资质、明确审核范围的审核人档案，是通过 AdSense 审核的关键信任信号。

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

## 5A. AdSense E-E-A-T 强化清单（提审前必须完成）

以下检查项直接影响 Google AdSense 审核结果：

| # | 检查项 | 合格标准 | 优先级 |
|---|--------|---------|--------|
| 1 | 审核人档案已发布 | `editorial-reviewer.json` 的 `name`/`role`/`credentials`/`reviewScope` 全部非空 | **P0** |
| 2 | Team 页面展示真实审核人 | `/team` 页面显示审核人姓名、资质、审核范围（非通用声明） | **P0** |
| 3 | 每篇内容页有审核署名 | 文章/题目页底部显示 `Reviewed by [Name/Editorial Team]` | **P1** |
| 4 | About 页面说明"谁在做" | About 页面包含团队/创始人简介，不只是产品描述 | **P1** |
| 5 | Editorial Policy 有流程细节 | 说明内容如何被创建、审核、纠错 | **P1** |
| 6 | 无虚假资质或关联 | 不声称 NCERT/NTA/政府/大学背书 | **P0** |
| 7 | 隐私政策含广告声明 | 明确提到第三方广告、cookie 用于广告投放 | ✅ 已通过 |
| 8 | 联系方式真实可达 | 有真实邮箱（非纯表单） | ✅ 已通过 |

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

**最低可行方案（如果暂时没有具名审核人）：**
- ✅ 已完成：Team 页面展示 "MedQGo Editorial Team" 档案，包含团队资质、审核范围、开始年份
- ✅ 已完成：About 页面新增 "Who Reviews Our Content" 章节，说明编辑团队背景
- ✅ 已完成：Editorial Policy 页面新增 "Our Review Process" 和 "Who Reviews Our Content" 章节
- 所有内容页底部显示 `Reviewed by MedQGo Editorial Team`
- 这个方案合法合规，但不如具名审核人通过率高
- 如果未来有具名审核人，可以更新 `editorial-reviewer.json` 并重新部署

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

在提交 AdSense 申请前，逐项确认：

- [ ] `/team` 页面显示真实审核人（非通用 "Editorial Team" 占位）
- [ ] `/about` 页面有团队/创始人简介段落
- [ ] `/editorial-policy` 页面有清晰的审核流程说明
- [ ] `/privacy` 页面包含广告和 cookie 声明（✅ 已有）
- [ ] `/contact` 页面有真实可达的邮箱（✅ 已有）
- [ ] 内容页底部有审核署名（`Reviewed by ...`）
- [ ] 无任何页面声称 NCERT/NTA/政府背书
- [ ] 所有资质信息均有书面同意书存档
- [ ] 站点已运行至少 2-4 周，有 30+ 内容页
