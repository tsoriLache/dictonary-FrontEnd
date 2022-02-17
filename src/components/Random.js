const notyf = new Notyf({
  duration: 1000,
  position: {
    x: 'right',
    y: 'top',
  },
  types: [
    {
      type: 'error',
      background: 'red',
      duration: 2000,
      dismissible: true,
    },
  ],
});

// Display an error notification
    result.data.err ? notyf.error('Not Found') : setData(result.data);
