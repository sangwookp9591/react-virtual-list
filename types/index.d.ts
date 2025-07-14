declare module 'virtual-list' {
    import * as React from 'react';

    export interface VirtualListProps<T> {
        items: T[];
        itemHeight: number;
        height: number;
        renderItem: (item: T, index: number) => React.ReactNode;
    }

    // JSX.Element 대신 React.JSX.Element 사용
    export function VirtualList<T>(props: VirtualListProps<T>): React.JSX.Element;
}
