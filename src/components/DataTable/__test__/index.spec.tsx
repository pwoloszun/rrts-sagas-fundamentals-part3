import React from 'react';
import {
  render,
  RenderResult,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DataTable, { DataTableProps } from '../index';

function renderDataTable<T>({
  items = [],
  selectedItem = undefined,
  metaData = [],
  onRowClick = undefined
}: DataTableProps<T>): RenderResult {
  return render(
    <DataTable items={items}
      selectedItem={selectedItem}
      metaData={metaData}
      onRowClick={onRowClick}
    />
  );
}

function propsExample() {
  const items = [
    { id: 100, name: 'bob', email: 'bob@bb.bb', login: 'reddevil' },
    { id: 200, name: 'ed', email: 'ed@bb.bb', login: 'imba' },
    { id: 300, name: 'kate', email: 'kate@bb.bb', login: 'katie' },
  ];
  const metaData = [
    { text: 'User Emails', value: 'email' },
    { text: 'Full Name', value: 'name' },
  ];
  const onRowClick = jest.fn();
  return {
    items,
    metaData,
    onRowClick,
  };
}

describe('DataTable', () => {
  describe('undefined selectedItem', () => {
    it('should render as many headers as specified in meta data', () => {
      const { items, metaData } = propsExample();
      const { getAllByRole } = renderDataTable({ items, metaData });
      const headers = getAllByRole('header');
      expect(headers.length).toEqual(metaData.length);
    });

    it('should render headers with texts from meta data', () => {
      const { items, metaData } = propsExample();
      const { getAllByRole } = renderDataTable({ items, metaData });
      const headers = getAllByRole('header');
      metaData.forEach((meta, i) => {
        const expectedText = meta.text;
        const header = headers[i];
        expect(header).toHaveTextContent(expectedText);
      });
    });

    xit('should render as many rows as passed items', () => {
      //TODO
    });

    xit('should render each item data in separate row', () => {
      //TODO
    });

    xit('should in each row render cells specified in meta data', () => {
      //TODO
    });

    xit('should highlight no row', () => {
      //TODO
    });
  });

  describe('passed selectedItem', () => {

    xit('should highlight exactly one row', () => {
      //TODO
    });

    xit('should highlight row by selectedItem', () => {
      //TODO
    });
  });

  describe('row click', () => {
    xit('should call passed event listener once', () => {
      //TODO
    });

    xit('should call passed event listener with item corresponding to clicked row', () => {
      // TODO
      // .querySelector(`table tbody tr:nth-child(${cssChildNo})`)
    });
  });

});
