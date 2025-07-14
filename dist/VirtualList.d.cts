import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

interface VirtualListProps<T> {
    items: T[];
    itemHeight: number;
    height: number;
    renderItem: (item: T, index: number) => React.ReactNode;
}
declare function VirtualList<T>({ items, itemHeight, height, renderItem }: VirtualListProps<T>): react_jsx_runtime.JSX.Element;

export { VirtualList, type VirtualListProps };
