# Resume Website — Design & Development Spec

## 1. Objective

Build a **premium, single-page resume website (SPA)** using the content provided in the attached document. The target audience is a **senior UX/UI hiring manager** — the site must make a strong first impression within seconds.

> **Content source:** Use ONLY the content from the attached document.
> **Design reference:** Refer to the attached **ux.png** image for design inspiration (layout, spacing, hierarchy, interaction patterns) — do NOT replicate it directly, reinterpret with originality.

---

## 2. Tech Stack (strict — no substitutions)

| Layer       | Tool                        |
| ----------- | --------------------------- |
| Framework   | **Next.js** (App Router)    |
| Styling     | **Tailwind CSS**            |
| Animations  | **Framer Motion**           |

---

## 3. Design Reference

Take **layout and visual rhythm** inspiration from the attached image **ux.png**.

Study the image closely and extract:
- Layout structure & grid system
- Section flow & spacing rhythm
- Typography hierarchy & font weights
- Card design patterns & hover states
- Dark/light theme treatment
- Minimal aesthetic & whitespace usage

Reinterpret with originality — do not clone.

---

## 4. Design Direction

| Attribute       | Guideline                                                    |
| --------------- | ------------------------------------------------------------ |
| Typography      | Modern sans-serif (Inter, Satoshi, or similar). Crisp, clean |
| Hierarchy       | Strong contrast between headings, subheadings, and body      |
| Whitespace      | Generous — let content breathe                               |
| Color           | Subtle, intentional palette. Avoid loud colors               |
| Layout          | Clean grid-based, consistent alignment                       |

---

## 5. Page Sections (top to bottom)

### 5.1 Hero / Landing (highest priority)
- Must deliver an immediate "wow" impression
- Content: Name, role, strong value proposition, CTA buttons (View Work / Contact)
- Include a hero image placeholder: `https://via.placeholder.com/1200x800`

### 5.2 About Me
- Brief personal/professional summary from the attached document

### 5.3 What I Do / Skills
Organize skills into these categories:
1. UX Design
2. Security
3. User Psychology
4. IT Support
5. Frontend Development

### 5.4 Featured Work
- Display key projects as **interactive cards** (hover effects, motion)
- Each card: project name, short description, thumbnail placeholder

### 5.5 Projects (Detailed Sections)
Include dedicated detail sections for each project:
- Cyber Billikens
- Delight Solutions
- KAHA
- Aqore (Dashboard, JSM, Mobile)
- PeopleFirst
- Security Capstone

### 5.6 Contact

### 5.7 Footer

---

## 6. Content Structuring — Design vs. Security

Projects and work should be visually **grouped into two tracks** within the single page:

| Track            | Description                                         |
| ---------------- | --------------------------------------------------- |
| **Design Work**  | UX/UI projects, research, wireframes, prototypes    |
| **Security Work**| Cybersecurity projects, audits, capstone work        |

Implementation: use **tabs, toggle, or clearly labeled sections** — NOT separate pages.
Refer to **ux.png** for how the reference design separates content categories visually.

---

## 7. Animations (Framer Motion)

| Type                        | Guideline                            |
| --------------------------- | ------------------------------------ |
| Scroll navigation           | Smooth scroll between sections       |
| Section reveals             | Fade/slide in on scroll into view    |
| Hover micro-interactions    | Cards, buttons, links                |
| Transitions                 | Subtle between sections              |

**Tone:** Minimal, smooth, intentional, premium. No excessive or flashy animations.

---

## 8. Images

- Use placeholders everywhere — do NOT block implementation on missing assets
- Placeholder URLs:
  - `https://via.placeholder.com/600x400`
  - `https://via.placeholder.com/800x600`
  - `https://via.placeholder.com/1200x800`

---

## 9. Responsiveness

Fully responsive across **desktop, tablet, and mobile**:
- Consistent layout and spacing at every breakpoint
- Readable typography at all sizes
- No horizontal overflow or broken grids

---

## 10. Performance

- Optimize images (lazy loading, proper sizing)
- Minimize JS bundle — code-split where possible
- Smooth 60fps animations
- Fast initial load (target < 3s on 3G)

---

## 11. Deliverables Checklist

- [ ] Complete Next.js project with App Router
- [ ] Clean, readable, well-organized component structure
- [ ] Reusable UI components (cards, buttons, section wrappers)
- [ ] All sections implemented with placeholder content from the document
- [ ] Framer Motion animations wired up
- [ ] Fully responsive across breakpoints
- [ ] Working SPA with smooth scroll navigation

---

## 12. Success Criteria

> The final site should make a hiring manager think:
> *"This person deeply understands UX, UI, and modern frontend systems — I want to hire them."*
