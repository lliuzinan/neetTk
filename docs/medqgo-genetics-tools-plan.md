# MedQGo genetics tools plan

Updated November 16, 2026. This is a product and review plan, not an AdSense approval promise.

See the [redesign brief](medqgo-monohybrid-redesign-brief.md) for the monohybrid explorer’s interaction and layout criteria.

## 遗传工具集实施顺序

以 NEET-UG 遗传学习中心为入口，按照“已知条件求结果 → 从观察比较假设 → 检查模型 → 记录解释”组织。现有单基因推演器、虚构家系分析器和解释记录可以连成第一条学习路径。现有 Plant U、连锁案例和专题指南是后续工具的起点。

| 任务 | 学生要解决的问题 | 最小交付与验收 | 状态 |
| --- | --- | --- | --- |
| T1 工具集入口 | 我现在能用哪个工具？ | 独立目录，按已知亲本、虚构家系、整理推理提供三个真实入口。从学习中心进入，两个工具均可返回 | 本地验收通过 |
| T2 家系推理与杂交衔接 | 一种遗传假设成立时，哪些亲本组合与观察相容？ | 修正家系连线及条件性基因型解释。仅对明确的常染色体假设预填推演参数，并保留其他相容假设。X 连锁模型使用独立解释 | 待做 |
| T3 测交证据比较 | 没观察到隐性后代，能排除杂合亲本吗？ | 基于 Plant U 案例，比较两个候选基因型在相同样本下的观测概率。明确样本量、独立性与“观测似然不等于后验概率” | 待做 |
| T4 显性方式对照 | 同一杂交组合为什么会得到不同表型比例？ | 用同一基因型分布切换完全显性、不完全显性与共显性，检验表型归类变化、配子和基因型分布保持一致 | 待做 |
| T5 双基因推演 | 两个位点的概率什么时候可以相乘？ | 限于明确独立分配的教学模型，展示配子组合与乘法路径。覆盖 4×4 和简化方格，验证概率总和及移动端可读性 | 待做 |
| T6 连锁证据审计 | 重组比例变化来自连锁还是样本偏差？ | 从已有连锁案例扩展亲本型、重组型分组和分母核对。覆盖零分母，展示选择性回收如何影响观察比例 | 待做 |
| T7 染色体和 DNA 计数 | 染色体数和 DNA 分子数为何不同步？ | 用一个虚构细胞逐阶段切换有丝与减数分裂。每个数字明确按整个细胞、每极或每个子细胞计数 | 待做 |
| T8 学习路径验收 | 换一个工具后能否继续解释和复习？ | 走通目录、案例、解释记录、恢复与导出。记录真实学生完成情况和卡点 | 待做 |

每次推进一个工作包。新增教学模型先给出来源、假设、边界案例和可操作预览，按既定要求核验后发布。目录只出现已能完成操作的工具。T2 对应下表的衔接工作包，T8 对应反馈与发布工作包。

T1 本地入口为 `/neet-ug/biology/tools`。构建及 46 项测试通过。浏览器验证了 320、390、768、1440px 布局、两个工具的往返导航、解释记录锚点及关闭 JavaScript 时的三个入口。工具集和教学候选尚未上线。

## User problem

A learner can read the inheritance guides but needs a visible way to connect a parental genotype to gametes, offspring combinations, probabilities, and the limits of the conclusion. A second need is learning how to reason from a fictional pedigree without turning incomplete information into a diagnosis or a real-family risk estimate.

## Work table

| Priority | Work package | Deliverable | Acceptance evidence | Release gate | Status |
| --- | --- | --- | --- | --- | --- |
| 1 | Monohybrid cross explorer | Known `AA`, `Aa`, or `aa` parents; gamete probabilities; clickable cross grid; genotype and complete-dominance phenotype totals; assumptions and limits; text export; append to the existing segregation record | All nine parental combinations conserve probability; `Aa × Aa`, `Aa × aa`, and `AA × aa` examples; keyboard controls; no-JS explanation remains readable; mobile layout has no horizontal overflow | Actual content review of calculations, wording, and interaction | Professional workspace redesign implemented locally November 16. Review pending |
| 2 | Learning-centre integration | A prominent route from the inheritance centre to the explorer and a return link to the saved segregation explanation | Internal link check, rendered page test, record preservation check | Same review as package 1 | Implemented locally November 16. Review pending |
| 3 | Fictional pedigree analyser | Add a small, authored family diagram; mark sex and trait status; compare autosomal dominant, autosomal recessive, and X-linked hypotheses; show compatible, contradicted, and underdetermined evidence | Test cases include an information-insufficient result; every inference names the observation and assumption; no disease diagnosis or personal family advice | Separate content review and source check before integration | Local candidate completed November 16. Review pending |
| 4 | Cross-to-pedigree handoff | Select a compatible parent pair from the fictional family and pass only explicitly supported genotype possibilities into the monohybrid model | Handoff preserves uncertainty and shows alternative hypotheses rather than one forced answer | Package 3 review complete | Planned |
| 5 | Feedback and release | Invite a small, authorized group of target learners to attempt one task; record completion and confusion points without inventing results | Feedback log identifies actual participants and changes, or explicitly records that feedback is unavailable | Owner decides release and deployment | Planned |

## Scope boundaries

The first tool models one autosomal locus, two alleles, equal segregation, random fertilisation, complete dominance only for phenotype aggregation, and no mutation or differential survival. It does not model linkage, two-locus crosses, incomplete dominance, codominance, sex linkage, penetrance, environmental effects, diagnosis, or personal reproductive risk.

The pedigree analyser will use a fictional teaching family. It will teach compatibility of hypotheses, not identify a condition in a real person. “Insufficient information” is a valid output. The tool must show the distinction between a known genotype, a possible genotype, and an inferred phenotype.

## Sources and review record

The initial model is cross-checked against NCERT Class 12 Biology, Chapter 4 as the curriculum reference and OpenStax Biology 2e sections [12.2](https://openstax.org/books/biology-2e/pages/12-2-characteristics-and-traits) and [12.3](https://openstax.org/books/biology-2e/pages/12-3-laws-of-inheritance). OpenStax is a factual cross-check only; no source figures, question text, answer options, or tables are reproduced. The implementation is an original MedQGo interface and calculation module.

The November 16 draft is local and marked noindex. It must not be described as live until the actual reviewer checks the calculations, model assumptions, accessible interaction, and the wording that separates educational probabilities from family risk. The existing Mendelian-guide review does not automatically cover this new tool.
