export const tableTypeBeforeElementBackgroundColor = (type: string | undefined) => {
  if (type) {
    switch (type.toLowerCase()) {
      case 'hardware':
        return '#7DB59A';
      case 'software':
        return '#FF7675';
      case 'networking':
        return '#FDCB6E';
      case 'troubleshooting':
        return '#6C5CE7';
      default:
        return 'black';
    }
  }
};
