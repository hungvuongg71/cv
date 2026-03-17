# Project Documentation — cv

Trang CV cá nhân của **Hung Vuong**, xây dựng theo Clean Architecture, triển khai tĩnh (SSG) trên GitHub Pages.

---

## Tổng quan

| Mục          | Giá trị            |
| ------------ | ------------------ |
| Tên dự án    | `cv`               |
| Loại         | Static Site (SSG)  |
| Framework    | React 18 + Vite 5  |
| Style        | TailwindCSS 3      |
| Deploy       | GitHub Pages       |
| CI/CD        | GitHub Actions     |
| Architecture | Clean Architecture |

---

## Cấu trúc thư mục

```
src/
├── presentation/       # Layer React: pages, components, hooks, store
├── application/        # Use-cases, services, DTOs
├── domain/             # Entities, repository interfaces, errors (không phụ thuộc gì)
├── infrastructure/     # Triển khai cụ thể: API client, repo implementations
└── shared/             # Config, utils, types dùng chung

docs/
├── team/               # Kỹ năng thành viên
├── project/            # Tài liệu dự án (file này)
└── principles/         # Nguyên tắc lập trình

tests/
├── unit/               # Unit tests (Vitest)
└── integration/        # Integration tests (mở rộng sau)

.github/
└── workflows/
    └── ci-deploy.yml   # CI lint→test→build SSG→deploy
```

---

## Luồng dữ liệu

```
ResumePage
  └─ useResume() [hook]
       └─ GetResumeUseCase [application]
            └─ IResumeRepository [domain interface]
                 └─ StaticResumeRepository [infrastructure]
                      └─ staticResumeData.ts [static JSON]
```

**Để chuyển sang API thật:** chỉ cần thay `StaticResumeRepository.getResume()` gọi `apiClient.get('/resume')` — không đụng đến domain hay presentation.

---

## Lệnh thường dùng

```bash
# Chạy dev server
npm run dev

# Build SSG (tạo HTML tĩnh)
npm run ssg

# Chạy tests
npm run test

# Kiểm tra types
npm run type-check

# Xem coverage
npm run test:coverage
```

---

## Biến môi trường

| Biến                | Mô tả                                | Mặc định |
| ------------------- | ------------------------------------ | -------- |
| `VITE_API_BASE_URL` | Base URL API nếu chuyển sang dynamic | `""`     |

Tạo file `.env.local` để override locally:

```
VITE_API_BASE_URL=https://api.yourdomain.com
```

---

## GitHub Pages Setup

1. Vào **Settings → Pages** của repo
2. Source: **GitHub Actions**
3. Đổi `base` trong `vite.config.ts` thành tên repo: `/cv/`
4. Push lên nhánh `main` → workflow tự deploy

---

## Nhánh & Quy trình làm việc

```
main        ← production (protected, chỉ merge qua PR)
  └─ develop ← nhánh phát triển chính
       └─ feature/xxx ← feature branches
```

PR từ `develop` → `main`:

1. CI chạy: lint + type-check + tests
2. SSG build kiểm tra
3. Sau khi merge: tự động deploy lên GitHub Pages

---

## Roadmap

- [ ] Thêm trang blog / notes
- [ ] Tích hợp contact form (React Hook Form + Formspree)
- [ ] i18n: Tiếng Việt / English toggle
- [ ] Dark mode transition animation
- [ ] PDF export resume
