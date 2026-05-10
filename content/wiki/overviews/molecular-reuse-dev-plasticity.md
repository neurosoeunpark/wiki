---
title: "Molecular Reuse: Development Wiring → Adult Plasticity"
type: overview
created: 2026-05-10
category: overviews
tags: [development, plasticity, critical-period, brakes, BDNF, TrkB, NMDAR, AMPAR, CREB, perineuronal-nets, MECP2, dev-plasticity-reuse, GABA, parvalbumin, framework, synthesis]
papers:
  - neuroscience/bavelier-2010-removing-brakes
  - neuroscience/hensch-2005-critical-period-plasticity
  - neuroscience/pizzorusso-2002-reactivation-ocular-dominance
  - neuroscience/park-poo-2013-neurotrophin-regulation
  - neuroscience/parenti-2020-neurodevelopmental-disorders-from-genetics-to
  - neuroscience/morelli-2022-mecp2-related-pathways-cortical
  - neuroscience/paulsen-2022-autism-genes-converge
  - neuroscience/gordon-2026-developmental-convergence-and-divergence
  - brain-development/wang-2025-molecular-cellular-dynamics
  - brain-development/keefe-2025-lineage-resolved-atlas-developing
---

## Why This Overview Exists

신경과학에서 자주 쓰이는 두 표현이 있다:

- 발달기 뇌는 **회로를 만든다** (wiring, synapse formation, axon guidance, target-derived survival)
- 성숙한 뇌는 **회로를 변경한다** (plasticity, learning, memory, LTP/LTD)

이 두 표현이 서로 다른 *생물학적 시스템*을 가리키는 것처럼 들리지만, 사실은 **거의 같은 분자 도구를 시간 스케일과 trigger만 다르게 사용**하는 것이다. 진화는 adult learning을 위해 새 분자를 발명하지 않았고, 발달기에 회로를 만들 때 쓰던 cascade를 — wider-open 모드에서 narrower-access 모드로 전환하면서 — 그대로 가져와 재배치했다.

이 thesis는 본 wiki의 4편 paper cluster에서 직접 evidence가 나온다:

- [[neuroscience/bavelier-2010-removing-brakes|Bavelier et al. 2010]] — **umbrella review**: 성체 plasticity의 제한은 분자 brake (PNN, myelin, E/I balance) 때문이지 도구가 사라진 것이 아니다. "성체 plasticity는 잠긴 것이지 사라진 것이 아니다."
- [[neuroscience/hensch-2005-critical-period-plasticity|Hensch 2005]] — **mechanistic foundation**: critical period가 active, regulated, reversible process라는 paradigm. PV+ interneuron maturation = opening trigger. PNN + Lynx1 + NgR/PirB = closing brakes.
- [[neuroscience/pizzorusso-2002-reactivation-ocular-dominance|Pizzorusso et al. 2002]] — **decisive 실험적 증거**: 성체 V1에 chondroitinase ABC → PNN 분해 → MD에 반응한 OD shift 회복. Critical period reopening의 첫 인과적 증거.
- [[neuroscience/park-poo-2013-neurotrophin-regulation|Park & Poo 2013]] — **분자 골격**: BDNF/TrkB cascade가 발달 (axon guidance, synapse formation, target-derived survival) + 성체 (LTP maintenance, dendritic spine remodeling) 에 동일 도구로 작동한다. MECP2-CaMKII-Bdnf promoter IV cascade.

이 cluster는 본 wiki에 이전에 비어있던 영역이다 (LLM_Wiki search agent 2026-05-10이 확인). 그래서 thesis 자체가 강력함에도 불구하고 본 wiki의 NDD/brain-development/critical-period 페이지들과 연결할 umbrella가 없는 상태였다. 이 overview가 그 bridge다.

## Part I — The Thesis: Tools, Not New Inventions

가장 핵심적인 한 문장:

> **진화는 adult learning을 위해 새 분자 cascade를 발명하지 않았다. 발달기에 회로 wiring + refinement에 쓰던 도구를 그대로 가져와서 (브레이크 일부 추가) adult plasticity로 재배치했다.**

이것이 우아한 진화 디자인인 이유:

1. **개체가 평생 새로운 환경에 적응**해야 하는데, 발달기에만 회로 변경 능력이 있고 성체에 없으면 → 성체가 새 환경에 절대 적응 못 한다 (실제로는 학습이 가능하다).
2. **하지만 성체가 발달기처럼 "wide open"이면** → 회로 instability + 학습한 모든 것이 다음 입력에 의해 덮어씌워진다 (catastrophic interference 문제).
3. **해결책**: 같은 도구를 보존하되, **brake로 접근을 제한한다**. 학습은 여전히 일어나지만 *시냅스 강도 변경* (좁은 변경) 수준으로만, 회로 형태 자체를 바꾸는 변경 (광범위한 변경) 은 막힌다.

즉 **adult plasticity = critical period plasticity의 brake-applied version**이다. 도구는 같고, 접근만 제한된다.

이 frame이 옳다면 두 가지 강력한 예측이 따라온다:
- (A) **brake를 풀면 성체에서 critical-period-like plasticity가 다시 나타나야 한다** — Pizzorusso 2002가 입증한다.
- (B) **NDD에서 brake/cascade가 망가지면 발달 + 성체 plasticity 둘 다에 결함이 보여야 한다** — Park & Poo의 MECP2/BDNF, Morelli 2022의 DM1/MECP2 cascade가 임상 증거다.

## Part II — The Dual-Use Molecular Table

같은 cascade가 두 시간 스케일에서 작동하는 가장 명확한 사례들:

| Molecular cascade | Developmental 역할 | Adult 역할 | Trigger 차이 |
|---|---|---|---|
| **NMDAR Mg²⁺ block 풀림 → Ca²⁺ → AMPAR 삽입** | Silent → active synapse 전환 (silent synapse가 functional 해진다) | LTP induction + 유지 | 발달: depolarising GABA가 trigger / 성체: coincident excitatory input이 trigger |
| **BDNF / TrkB → PI3K/MAPK/CREB** | Target-derived survival + axon guidance + synapse 형성 | LTP maintenance + dendritic spine remodeling | 발달: target-derived (paracrine) / 성체: postsynaptic activity-induced (autocrine) |
| **CREB / IEG (c-Fos, Arc, Egr1)** | Critical period spontaneous activity → 회로 pruning | Learning → 시냅스 단백질 → memory consolidation | 발달: spontaneous (GDP, ENO) / 성체: experience-driven |
| **MECP2-CaMKII-Bdnf promoter IV** | 활성-의존 BDNF 생산 → cortical inhibitory circuit 발달 | 활성-의존 BDNF 생산 → LTP 유지 | 같은 cascade, 다른 시점 |
| **Reelin → VLDLR/ApoER2 → DAB1** | Inside-out cortical migration의 stop signal | 성체 시냅스 가소성 + dendrite stability | 발달: extracellular gradient / 성체: 적은 양 지속 발현 |
| **EphA / EphrinA** | Topographic map (retinotectal) | Hippocampal LTP/LTD | 발달: gradient gates wiring / 성체: synaptic gates plasticity |
| **PV+ interneuron maturation + perisomatic inhibition** | Critical period opening → cortical refinement gating | E/I balance → gamma oscillation → attention/cognition | 같은 회로, 다른 mode |

가장 우아한 example은 **NMDAR Mg²⁺ block** 메커니즘이다:

```
같은 분자 사슬:
  postsynaptic depolarisation → NMDAR Mg²⁺ block 풀림 → Ca²⁺ 유입 → AMPAR 시냅스 삽입

발달에서 trigger:    GABA depolarisation (NKCC1 우세 시기)
                    → silent synapse가 active 해진다 (회로 wiring 단계)

성체에서 trigger:   coincident excitatory input
                    → LTP (회로 강도 변경)
```

발달의 silent synapse activation = 어른 brain의 LTP. 같은 도구, 다른 trigger.

이 매핑이 [[neuroscience/park-poo-2013-neurotrophin-regulation|Park & Poo 2013]]의 핵심 thesis이고, [[brain-development/wang-2025-molecular-cellular-dynamics|Wang 2025 Tri-IPC]]가 "이 dual-use 도구를 만들어내는 progenitor의 영장류 특이 signature"를 보여준다.

## Part III — Critical Period as the Closure of Wide-Open Plasticity

[[neuroscience/hensch-2005-critical-period-plasticity|Hensch 2005]]가 정립한 paradigm shift:

**Old view**: critical period가 자동으로 닫히는 passive maturation 과정.
**New view**: critical period는 **active, regulated, reversible process**다. Open과 close 모두 분자 신호로 trigger된다.

Opening trigger:
- **PV+ (parvalbumin+) interneuron maturation** — fast-spiking GABAergic basket cell이 pyramidal neuron의 soma 주변을 강하게 감싸 perisomatic inhibition을 강화한다.
- **Otx2 cascade** — Cajal-Retzius cell이 분비 → PV+ interneuron이 흡수 → maturation.
- **GAD65-dependent GABA tone** — GAD65 KO에서 critical period가 안 열린다. Benzodiazepine으로 인위 trigger 가능 (Hensch et al. 1998 Science).

이것이 paradox 같아 보이는 이유 — GABA가 *inhibitory* transmitter인데 그 maturation이 *plasticity opening*을 trigger한다. 
- 답: **회로의 signal-to-noise ratio를 높여서 의미 있는 활동 패턴이 가소성을 트리거할 수 있게 만드는 것**이다. 
- 비유: 너무 시끄러운 합창단 (미성숙) 에서는 누가 잘 부르는지 알 수 없다. PV+ interneuron이 합창단을 조용히 시키면 잘 부르는 사람을 가려낼 수 있다.

Closing trigger:
- **Perineuronal net (PNN)** 형성 — chondroitin sulfate proteoglycan (CSPG) 으로 만들어진 ECM 그물이 PV+ interneuron 주변에 형성된다. 시냅스 재배선을 물리적으로 차단한다.
- **Myelin-associated inhibitors** — NgR, PirB, MAG/Nogo가 axon outgrowth를 차단한다.
- **Lynx1** — endogenous nicotinic AChR antagonist, 성체에서 plasticity brake로 작동한다.

Closing은 sequential하다 — opening이 일어나야 (PV+ maturation) closing 메커니즘이 작동 가능하다. Paulsen et al. 2022가 ASD에서 보여준 **GABAergic vs excitatory development의 asynchrony**가 정확히 이 cascade의 어느 한 단계 dysregulation으로 NDD가 발생하는지를 보여주는 사례다 ([[neuroscience/paulsen-2022-autism-genes-converge]]).

## Part IV — The Brakes: How Closure Works

[[neuroscience/bavelier-2010-removing-brakes|Bavelier et al. 2010]]의 핵심 framework는 brake를 두 부류로 정리한다:

### Structural brakes (물리적 차단)

- **PNN (perineuronal net)** — CSPG 그물, PV+ basket cell 주변. 가장 well-characterized brake다.
- **Myelin-associated inhibitors** — NgR, PirB가 axon outgrowth를 차단한다. 성숙한 axon이 새 가지를 안 낸다.
- **ECM 일반** — proteoglycan + tenascin 등이 회로를 물리적으로 안정화한다.

### Functional brakes (활성 패턴 제약)

- **E/I balance** — 발달 초기 excitation 우세 (GABA depolarising, silent synapses 등) → 성숙기 inhibition 우세 (KCC2 발현, PV+ maturation). Inhibition이 강하면 회로가 의미 있는 변화를 만들기 어렵다.
- **Lynx1** — endogenous nicotinic AChR antagonist. 성체에서 acetylcholine-mediated plasticity를 억제한다.
- **Neuromodulator tone** — NE, ACh, 5-HT, DA의 endogenous level이 plasticity의 permissive 정도를 결정한다. SSRI fluoxetine으로 5-HT level을 올리면 성체 amblyopia에서 plasticity가 회복된다 ([[neuroscience/bavelier-2010-removing-brakes]]).

이 brake들은 **다 발달 후기에 자기 조직화로 형성된다** — PV+ interneuron이 성숙해서 자기 주변에 PNN을 형성하고, 이미 자란 axon이 myelinate되고, neuromodulator system이 자기 set point에 도달한다. 즉 brake 형성 자체가 발달 cascade의 마지막 단계다.

## Part V — Reopening: The Decisive Evidence

이 thesis의 가장 powerful한 prediction:

> **Brake를 풀면 성체에서 critical-period-like plasticity가 다시 나타나야 한다.**

[[neuroscience/pizzorusso-2002-reactivation-ocular-dominance|Pizzorusso et al. 2002]]의 결정적 실험이 이를 입증한다:

```
실험 디자인:
  1. 성체 rat (P70+, critical period 닫힌 상태) V1
  2. chondroitinase ABC (chABC) 주입 → PNN 분해
  3. monocular deprivation (MD) 시행
  4. ocular dominance (OD) shift 측정

결과:
  - chABC + MD → 정상 critical period 수준의 OD shift 회복
  - vehicle + MD → OD shift 없음 (기대된 성체 결과)
```

→ **PNN이 성체 plasticity의 brake임을 인과적으로 증명한다**. 시간 경과로 plasticity가 사라진 것이 아니라 PNN이 적극적으로 막고 있던 것이다.

Bavelier et al. 2010은 이를 임상으로 확장한다:
- **SSRI (fluoxetine)** → 성체 rat amblyopia 회복 (Maya Vetencourt 2008) — 5-HT brake 해제
- **GABA precursor transplantation** → 성체에 second sensitive period 유도 (Southwell 2010)
- **Action video game training** → human amblyopic patient 시각 회복 — 가장 noninvasive intervention

이 spectrum이 *"성체에서 plasticity 회복은 가능, brake-lifting strategy는 다양"* 이라는 evidence base를 형성한다.

[[neuroscience/park-poo-2013-neurotrophin-regulation|Park & Poo 2013]]가 추가로 보여준 분자 mechanism: **PTPσ가 PNN 결합 시 TrkB을 dephosphorylate한다** → BDNF signaling 차단 → plasticity brake. 즉 chABC가 PNN을 분해하면 PTPσ-TrkB 억제도 풀려서 BDNF cascade가 다시 활성화된다 → LTP 회복. **두 시스템 (PNN brake + BDNF/TrkB cascade) 이 같은 분자 노드 (TrkB phosphorylation) 에서 만난다**.

## Part VI — Why This Matters for NDD

이 thesis가 옳다면 NDD의 핵심 가설:

> **NDD = 발달 cascade가 망가졌고 (회로 wiring 결함), 같은 cascade가 망가졌으니 성체 plasticity도 결함 (학습/기억 어려움). 한 분자가 망가지면 두 표현형이 같이 나타난다.**

본 wiki의 NDD entries가 이 thesis와 어떻게 연결되는지 본다.

### MECP2 / Rett — 가장 명확한 dual-system 결함 사례

- [[neuroscience/park-poo-2013-neurotrophin-regulation|Park & Poo 2013]]가 정리한다: **MECP2가 CaMKII에 의해 phosphorylation되면 release되어 Bdnf promoter IV transcription을 풀어준다**. 즉 MECP2가 활성-의존 BDNF 생산의 핵심 epigenetic gate다.
- MECP2 KO → BDNF expression 감소. Bdnf double KO → Rett 표현형이 더 일찍 발병한다 (Chang 2006).
- [[neuroscience/morelli-2022-mecp2-related-pathways-cortical|Morelli et al. 2022]] — DM1 cortical organoids에서 MECP2 pathway dysregulation이 Rett-like 표현형으로 이어진다. 같은 cascade가 망가진다.

→ Rett는 본질적으로 **L14/critical-period cascade가 깨진 병**이다. 발달기 회로 wiring + 성체 학습 둘 다 영향을 받는다.

### BDNF Val66Met — 분자 한 SNP의 광범위 영향

- [[neuroscience/park-poo-2013-neurotrophin-regulation|Park & Poo 2013]]: Val66Met → BDNF 분비 효율 ↓
- 임상 효과: 우울증 위험 ↑, PTSD 위험 ↑, hippocampal-dependent memory 감소, 일부 운동 학습 영향
- 이 광범위함의 이유: BDNF/TrkB가 발달 + 성체 plasticity 양쪽에서 핵심이다 → 한 분자가 약해지면 *두 시간 스케일* 모두에 분산되어 나타난다.

### Asynchronous GABA vs excitatory development (Paulsen 2022) — critical period dysregulation

- [[neuroscience/paulsen-2022-autism-genes-converge|Paulsen et al. 2022]]: 3 ASD genes (KMT5B, ARID1B, CHD8) 가 모두 GABAergic vs deep-layer excitatory의 asynchrony로 수렴한다.
- 이 asynchrony는 정확히 **critical period opening cascade의 분자 기반 (PV+ maturation timing)** 의 dysregulation이다.
- → critical period가 "잘못된 시점에" 열리거나 닫혀서 회로 consolidation이 misalign된다.

### NDD pathway convergence (Parenti 2020) — synaptic axis

- [[neuroscience/parenti-2020-neurodevelopmental-disorders-from-genetics-to|Parenti & Novarino 2020]]: NDD risk genes가 3 pathway family로 수렴한다 — PI3K-mTOR + chromatin/epigenetic + **synaptic**.
- "Synaptic" axis에 NRXN, NLGN, SHANK 외에도 BDNF/TrkB, NMDAR subunits, AMPAR가 다수 포함된다 — 즉 **dev↔plasticity reuse cluster의 분자들이 NDD risk gene 안에 풍부하다**.
- 같은 cascade가 발달과 성체 학습 모두에서 작동한다 → 한 변이가 두 표현형 ([회로 발달 결함] + [학습/기억 결함]) 을 동시에 일으킨다.

### Idiopathic ASD divergence + late convergence (Gordon 2026) — temporal frame

- [[neuroscience/gordon-2026-developmental-convergence-and-divergence|Gordon, Yoon, Bicks et al. 2026]]: 70 patient-derived hiPSC organoid → early divergence → late convergence.
- "Late convergence" 단계가 정확히 **chromatin/TF regulator complex (M5 module, SMARCA4 등)** 매개다 — Hensch 2005의 critical period opening cascade의 chromatin layer.
- → ASD가 critical period maturation의 분자 cascade에 수렴해서 일어남을 단일세포 organoid level에서 확인한다.

## Part VII — 영장류 / 사람 dimension

[[brain-development/wang-2025-molecular-cellular-dynamics|Wang 2025 Tri-IPC]] 와 [[brain-development/keefe-2025-lineage-resolved-atlas-developing|Keefe 2025]] 가 보여주는 추가 layer:

- 영장류/사람 cortex는 **추가 progenitor (Tri-IPC, oRG)** 를 가지고 있어서 GABA interneuron + OPC + astrocyte를 한 progenitor에서 만드는 신경↔교 전환기를 가진다.
- 이 추가 layer가 **critical period mechanism에 영향을 준다** — PV+/SST+ interneuron의 일부가 사람 특이 dorsal-derived population에서 온다 → 이 population의 maturation 타이밍이 사람 critical period 정밀화에 기여할 가능성이 있다.
- 즉 dev↔plasticity reuse는 mouse에서 발견된 framework지만 **사람에서는 추가 layer가 끼어든다** — 따라서 마우스 critical period 모델로 안 잡히는 사람-특이 plasticity dynamics가 존재할 수 있다.

이것이 [[overviews/transcriptional-heterogeneity-as-developmental-mechanism]] 에서 짚인 *"마우스→사람 translation gap"* 의 critical period dimension이다.

## Part VIII — Cross-Wiki Connections

**"같은 toolkit, 다른 axis" 삼부작** — 본 overview는 다음 두 자매와 함께 "발달 toolkit이 multi-purpose system"이라는 더 큰 frame의 한 축이다:

- 본 overview = **발달 × 성체 plasticity** axis (시간 axis)
- [[overviews/cancer-development-thesis]] = **정상 발달 × cancer hijack** axis (조직/시점 axis) — 같은 cascade가 잘못된 시점에 reactivate되면 cancer
- [[overviews/evolution-disease-axis-crossing-patterns]] = **진화 × 질병** axis (역사 axis) — 진화가 위로 튜닝한 회로와 질병이 망가뜨리는 회로의 교차 패턴

세 overview에서 같은 분자/유전자가 반복 등장하는 건 (BDNF/TrkB, NMDAR cascade, mTOR pathway, PTEN 등) redundancy가 아니라 frame의 prediction이다.

**그 외 관련 overview**:
- **[[overviews/convergent-regulation-across-systems]]** — NDD pathway convergence 관점. 본 overview가 그 convergence의 **시간 dimension** (발달 cascade가 성체에서도 작동) 을 추가한다.
- **[[overviews/convergence-heterogeneity-cascade-frame]]** — NDD가 다단계 cascade임을 frame한다. 본 overview의 dev→adult 재배치는 그 cascade의 마지막 (postnatal/adult) 단계다.
- **[[overviews/transcriptional-heterogeneity-as-developmental-mechanism]]** — 발달 시점의 stochasticity. 본 overview는 그 stochasticity가 critical period closure 후 어떻게 "고정"되는지 설명한다.
- **[[overviews/cell-identity-programs-and-trajectories]]** — drift field 관점. 본 overview의 brake = drift field의 attractor을 좁히는 것이다. Reopening = attractor를 다시 wide하게 만드는 것이다.

## Closing — The Big Frame

이 cluster가 정립하는 한 줄 thesis:

> **발달은 도구를 만들고, 성체는 같은 도구로 학습한다. 그 사이에 brake가 끼어들어 도구의 접근성을 좁힌다. NDD는 도구나 brake가 망가져서 두 시간 스케일 모두에 결함이 나타난다. 그리고 brake는 풀 수 있다 — 즉 성체에서 critical-period-like plasticity 회복이 원리적으로 가능하다.**

이것이 paradigm-shift level의 통찰인 이유:
- **분자 수준**: NMDAR/AMPAR, BDNF/TrkB, CREB/IEG 같은 specific cascade가 두 시간 스케일에서 식별 가능한 trigger 차이로만 작동한다.
- **세포 수준**: PV+ interneuron이 critical period의 master regulator다. 발달의 migrant (Decision 3 in Class_Wiki neural-development) 가 성체 cortex의 plasticity gatekeeper가 된다 (closed loop).
- **회로 수준**: critical period opening = brakes 없음, closing = brakes 작동. Spectrum 형태의 plasticity 정도다.
- **임상 수준**: NDD = 이 cascade의 어느 한 단계 dysregulation. 약시/PTSD/우울증 = brake intervention 임상 응용 (chABC, fluoxetine, video games).
- **진화 수준**: 진화의 절약 — 새 cascade를 발명하지 않고 기존 도구를 재배치하면서 brake를 추가한다.

본 wiki의 NDD/brain-development/critical-period 페이지들을 이 framework 안에서 읽으면 산발적 발견들이 하나의 통합된 분자 이야기로 짜인다. **본 cluster (Bavelier 2010 + Hensch 2005 + Pizzorusso 2002 + Park & Poo 2013) 가 그 framework의 정초다**.

---

### 다음 enrichment 후보

본 cluster에서 빠진 canonical paper들 (검색 agent가 식별):
- **Hong 2008** — BDNF promoter IV KI mutation, sensory experience-induced cortical inhibitory circuit 결함
- **Maya Vetencourt 2008 Science** — fluoxetine으로 성체 amblyopia 회복 (E/I brake-lifting의 임상 prototype)
- **Carulli 2010 Brain** — Crtl1 KO로 PNN 형성 자체를 막아 평생 plasticity 유지 (PNN의 인과 증거 강화)
- **Sugiyama 2008 Cell** — Otx2의 PV+ maturation 역할 mechanism (critical period opening cascade 분자 디테일)

이들이 추가되면 이 overview의 mechanism 섹션이 더 dense해진다. 우선순위에 따라 후속 ingest batch가 가능하다.
