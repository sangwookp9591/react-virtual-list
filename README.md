# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
    globalIgnores(['dist']),
    {
        files: ['**/*.{ts,tsx}'],
        extends: [
            // Other configs...

            // Remove tseslint.configs.recommended and replace with this
            ...tseslint.configs.recommendedTypeChecked,
            // Alternatively, use this for stricter rules
            ...tseslint.configs.strictTypeChecked,
            // Optionally, add this for stylistic rules
            ...tseslint.configs.stylisticTypeChecked,

            // Other configs...
        ],
        languageOptions: {
            parserOptions: {
                project: ['./tsconfig.node.json', './tsconfig.app.json'],
                tsconfigRootDir: import.meta.dirname,
            },
            // other options...
        },
    },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config([
    globalIgnores(['dist']),
    {
        files: ['**/*.{ts,tsx}'],
        extends: [
            // Other configs...
            // Enable lint rules for React
            reactX.configs['recommended-typescript'],
            // Enable lint rules for React DOM
            reactDom.configs.recommended,
        ],
        languageOptions: {
            parserOptions: {
                project: ['./tsconfig.node.json', './tsconfig.app.json'],
                tsconfigRootDir: import.meta.dirname,
            },
            // other options...
        },
    },
]);
```

# react-virtual-list

## 설치 방법

이 패키지는 npm을 통해 직접 설치할 수 있습니다. 아래와 같이 입력하세요:

```
npm install git+https://github.com/sangwookp9591/react-virtual-list.git
```

## 사용 방법

아래는 VirtualList 컴포넌트의 기본 사용 예시입니다.

```tsx
import React from 'react';
import { VirtualList } from 'react-virtual-list';

// 예시 데이터 생성
const items = Array.from({ length: 1000 }, (_, i) => `아이템 ${i + 1}`);

function App() {
    return (
        <VirtualList
            items={items} // 렌더링할 전체 아이템 배열
            itemHeight={40} // 각 아이템의 높이(px)
            height={400} // 리스트 전체 높이(px)
            renderItem={(item, index) => (
                // 각 아이템을 렌더링하는 함수 (한글 주석)
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        paddingLeft: 16,
                        borderBottom: '1px solid #eee',
                    }}
                >
                    {item} (index: {index})
                </div>
            )}
        />
    );
}

export default App;
```

### VirtualList Props 설명 (한글)

-   `items`: 렌더링할 데이터 배열 (필수)
-   `itemHeight`: 각 아이템의 고정 높이(px, 필수)
-   `height`: 리스트 전체 높이(px, 필수)
-   `renderItem`: 각 아이템을 렌더링하는 함수. `(item, index) => ReactNode` 형태 (필수)

> ⚠️ 아이템의 높이는 모두 동일해야 하며, 너무 많은 데이터를 한 번에 렌더링하지 않고, 스크롤에 따라 필요한 부분만 렌더링하여 성능을 최적화합니다.
