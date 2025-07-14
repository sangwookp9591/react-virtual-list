declare module 'virtual-list' {
    import * as React from 'react';

    export interface VirtualListProps<T> {
        items: T[];
        itemHeight: number;
        height: number;
        renderItem: (item: T, index: number) => React.ReactNode;
    }

    // React.ReactElement 사용 (JSX.Element 대신)
    export function VirtualList<T>(props: VirtualListProps<T>): React.ReactElement;
}
