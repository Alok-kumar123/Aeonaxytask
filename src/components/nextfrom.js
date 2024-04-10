import React from 'react';

const Nextfrom = () => {
  return (
    <div style={styles.container}>
      <div style={styles.circle} />
      <h1 style={styles.text}>Finding learning path recommendations for you based on your responses</h1>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#FFFFFF',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: '50%',
    backgroundColor: '#FFC107',
    marginBottom: 20,
  },
  text: {
    fontFamily: 'Arial, sans-serif',
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
  },
};

export default Nextfrom;