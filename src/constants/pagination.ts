export const paginationStyles = {
  borderColor: '#7db59a',
  color: 'black',
};

export const setPaginationStyles = () => `.ant-pagination-item {
  color: ${paginationStyles.color};
  & a {
    color: inherit;
  }

  &:hover {
    border-color: ${paginationStyles.borderColor};
    color: inherit;
  }
}

.ant-pagination-item-active {
  border-color: ${paginationStyles.borderColor};
}

.ant-pagination-item-link {
  &:hover {
    border-color: ${paginationStyles.borderColor};
    color: ${paginationStyles.color};
  }
}`;
