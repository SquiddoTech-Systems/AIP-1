# Artificial Intelligence Preference Protocol (AIP-1)

**Version 1.0 — Draft Standard (April 2026)**

AIP-1 is an open, neutral standard that enables websites to declare how their content may be accessed and used by artificial intelligence systems.

It extends existing web conventions to support transparency, interoperability, and responsible AI development.

---

## 📌 Abstract

The Artificial Intelligence Preference Protocol (AIP-1) defines a machine-readable framework for expressing content usage preferences in the context of AI systems.

It allows publishers to specify whether their content may be used for:

* Model training
* Fine-tuning
* Indexing
* Summarization
* Commercial AI use

---

## ❓ Motivation

The growth of AI systems has created new challenges around:

* Ownership and control of content
* Lack of standardized consent mechanisms
* Ambiguity in AI training practices

Existing tools such as robots.txt do not fully address these concerns.

AIP-1 introduces a structured, extensible solution.

---

## 🎯 Design Principles

### Neutrality

AIP-1 does not prohibit AI usage — it enables clear communication of preferences.

### Compatibility

Designed to work alongside existing web standards.

### Simplicity

Easy to implement with minimal overhead.

### Extensibility

Supports future AI capabilities and policy needs.

---

## 🧠 Terminology

| Term        | Definition                                      |
| ----------- | ----------------------------------------------- |
| AI System   | Any automated system that processes web content |
| Training    | Use of content to build or improve models       |
| Fine-Tuning | Updating models using domain-specific data      |
| Inference   | Generating outputs from trained models          |
| Publisher   | Entity that owns or controls content            |

---

## 🏗 Architecture Overview

AIP-1 operates across three layers:

1. **Root Layer** → `ai.txt`
2. **Document Layer** → HTML meta tags
3. **Transport Layer** → HTTP headers

---

## 📄 Root Declaration (`ai.txt`)

AIP-1 introduces a root-level configuration file:

```
https://example.com/ai.txt
```

### Example

```
# AIP-1 Configuration File

User-Agent: *
Allow-Training: no
Allow-FineTuning: no
Allow-Indexing: yes
Allow-Summarization: conditional

User-Agent: AcademicBot
Allow-Training: yes
Allow-CommercialUse: no
```

---

## 🧩 Page-Level Controls (HTML)

Placed inside the `<head>` section:

```html
<meta name="aip:training" content="deny">
<meta name="aip:fine-tune" content="deny">
<meta name="aip:summary" content="allow">
```

### Supported Values

* `allow`
* `deny`
* `conditional`
* `attribution-required`

---

## 🌐 Transport-Level Controls (HTTP Headers)

For APIs and dynamic responses:

```
AIP-Policy: no-training, no-finetune, allow-index
```

---

## ⚖️ Compliance Model

AIP-1 is based on voluntary adoption and transparency.

### Key Components

* Public documentation of AI data usage
* Clear crawler identification
* Respect for declared publisher preferences

Future iterations may include compliance registries.

---

## 🔐 Security Considerations

### Risks

* Non-compliant crawlers
* Identity spoofing
* Unauthorized data usage

### Potential Mitigations

* Cryptographic crawler identification
* Signed requests
* Public audit logs

---

## 🌍 Industry Alignment

AIP-1 is designed to align with:

* AI developers
* Search engines
* Content publishers
* Standards organizations such as the World Wide Web Consortium (W3C)

Its neutral and flexible design supports adoption across the ecosystem.

---

## 🛠 Implementation Guide

### Step 1

Create an `ai.txt` file at your domain root.

### Step 2

Add HTML meta tags to control page-level behavior.

### Step 3

Configure HTTP headers for APIs or dynamic content.

### Step 4

Document your policy publicly for transparency.

---

## 🔮 Future Work

* Enforcement frameworks
* Legal alignment
* Browser-level support
* Standardization through global organizations

---

## 📚 Appendix

### Directive Reference

| Directive           | Values                 |
| ------------------- | ---------------------- |
| Allow-Training      | yes / no               |
| Allow-FineTuning    | yes / no               |
| Allow-Indexing      | yes / no               |
| Allow-Summarization | yes / no / conditional |
| Allow-CommercialUse | yes / no               |

---

## 🤝 Contributing

Contributions, feedback, and discussion are welcome.

This project is intended as an open standard and community-driven effort.

---

## 📜 License

MIT License

---

## 📢 Status

Draft Proposal — Version 1.0 (2026)

---

## 🚀 Vision

AIP-1 aims to establish a shared, transparent foundation for how AI systems interact with web content — balancing innovation with respect for content ownership.

By creating a common language between publishers and AI developers, AIP-1 helps build a more sustainable and cooperative web ecosystem.
