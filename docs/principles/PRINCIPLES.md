# Nguyên tắc lập trình — cv

Các nguyên tắc này áp dụng cho toàn bộ codebase. Mọi PR đều phải tuân thủ.

---

## 1. Clean Architecture

### Dependency Rule (Quy tắc phụ thuộc)

> Hướng phụ thuộc **chỉ đi vào trong** — từ ngoài vào domain, không bao giờ ngược lại.

```
Presentation → Application → Domain ← Infrastructure
```

- **Domain** không được `import` bất kỳ layer nào khác.
- **Infrastructure** triển khai interface của Domain, không ngược lại.
- **Presentation** chỉ giao tiếp với Application qua use-cases và hooks.

### Ví dụ sai ❌

```ts
// domain/entities/Resume.ts
import axios from 'axios' // ❌ Domain import thư viện ngoài
import { apiClient } from '@infrastructure/api/apiClient' // ❌
```

### Ví dụ đúng ✅

```ts
// domain/repositories/IResumeRepository.ts
import type { Resume } from '@domain/entities/Resume'
export interface IResumeRepository {
  getResume(): Promise<Resume> // ✅ Chỉ dùng domain types
}
```

---

## 2. Single Responsibility Principle (SRP)

Mỗi file, class, hoặc function chỉ làm **một việc**.

```ts
// ❌ Sai: hook vừa fetch vừa format vừa filter
function useResume() {
  // fetch từ API
  // format date
  // filter experiences theo năm
}

// ✅ Đúng: tách ra
function useResume() // chỉ fetch
function formatPeriod() // chỉ format
function filterByYear() // chỉ filter
```

---

## 3. Dependency Injection (DI)

Không hardcode dependency — truyền vào từ ngoài để dễ test và thay thế.

```ts
// ❌ Sai
class GetResumeUseCase {
  private repo = new StaticResumeRepository() // hardcoded
}

// ✅ Đúng
class GetResumeUseCase {
  constructor(private repo: IResumeRepository) {} // injected
}
```

---

## 4. Interface trước, Implementation sau

Luôn định nghĩa **interface/abstract** trong domain trước khi viết implementation cụ thể.

```ts
// 1. Định nghĩa interface (domain)
export interface IResumeRepository {
  getResume(): Promise<Resume>
}

// 2. Implement (infrastructure)
export class StaticResumeRepository implements IResumeRepository {
  async getResume() { ... }
}
```

---

## 5. Naming Conventions

| Loại                 | Convention                                | Ví dụ                             |
| -------------------- | ----------------------------------------- | --------------------------------- |
| Component            | PascalCase                                | `HeroSection`, `ThemeToggle`      |
| Hook                 | camelCase + `use` prefix                  | `useResume`, `useThemeStore`      |
| Use-case class       | PascalCase + `UseCase` suffix             | `GetResumeUseCase`                |
| Repository interface | PascalCase + `I` prefix                   | `IResumeRepository`               |
| Repository impl      | PascalCase + `Repository` suffix          | `StaticResumeRepository`          |
| Type / Interface     | PascalCase                                | `Resume`, `WorkExperience`        |
| Constant             | UPPER_SNAKE_CASE                          | `APP_CONFIG`, `STORAGE_KEY`       |
| File                 | kebab-case hoặc PascalCase (match export) | `useResume.ts`, `HeroSection.tsx` |

---

## 6. TypeScript Strict Mode

- Luôn bật `strict: true` trong `tsconfig.json`.
- **Không dùng `any`** — dùng `unknown` nếu thật sự cần escape.
- Prefer `type` cho union/intersection, `interface` cho object shapes.
- Prefer `readonly` cho props không thay đổi.

```ts
// ❌
function process(data: any) { ... }

// ✅
function process(data: unknown) {
  if (typeof data === 'string') { ... }
}
```

---

## 7. Component Design

- Component **chỉ nhận props**, không tự fetch data (trừ page-level).
- Dùng **composition** thay vì inheritance.
- Props interface đặt ngay trên component:

```tsx
interface HeroSectionProps {
  resume: Resume
}

export function HeroSection({ resume }: HeroSectionProps) { ... }
```

---

## 8. Testing

- Mỗi use-case **phải có** unit test tương ứng.
- Test theo **hành vi** (behavior), không test implementation detail.
- Mock ở boundary (repository), không mock deep inside domain.
- Đặt test file trong `tests/unit/` với tên `*.test.ts(x)`.

```ts
// ✅ Test hành vi
it('should return resume from repository', async () => {
  const result = await useCase.execute()
  expect(result.name).toBe('Hung Vuong')
})

// ❌ Test implementation
it('should call _internalFetchHelper', ...)
```

---

## 9. Git Commit Convention

Sử dụng **Conventional Commits**:

```
feat: add dark mode toggle
fix: resolve resume loading flash
docs: update team skills table
test: add unit tests for GetResumeUseCase
chore: upgrade vite to v5.3
refactor: extract HeroSection from ResumePage
```

---

## 10. Không commit code chết

- Không để lại `console.log` trong production code.
- Xoá code commented-out — dùng Git history thay thế.
- Không để biến chưa dùng (`noUnusedLocals: true` sẽ báo lỗi).

---

## Checklist trước khi tạo PR

- [ ] `npm run type-check` không có lỗi
- [ ] `npm run test` pass 100%
- [ ] `npm run ssg` build thành công
- [ ] Không có `any`, `console.log`, code dead
- [ ] Commit message theo Conventional Commits
- [ ] PR description mô tả rõ thay đổi
