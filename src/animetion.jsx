import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const CustomAlert = () => {
  const showAlert = () => {
    MySwal.fire({
      title: 'パクさん最強！',
      width: 800,
      padding: '10em',
      color: '#FFFFFF',
      background: `#fff url(/park.jpg) no-repeat center center/cover`,
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExamJ2amU4OTNzbW1venE3Z2VncTRnaHc2YXJmbnBmbWtqeWk5Ymk0eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/wAs2ha84kWkOu8x1A6/giphy.gif")
        
        left top
        no-repeat
      `,
      customClass: {
        popup: 'rounded-popup', 
        backdrop: 'rounded-backdrop' // backdropに丸みを持たせる
      },
      onBeforeOpen: () => {
        const backdrop = Swal.getContainer().querySelector('.swal2-backdrop');
        if (backdrop) {
          backdrop.style.borderRadius = '20px'; // backdropに丸みを持たせる
        }
      },
    });
  };

  return (
    <div>
      <button onClick={showAlert}>Show Alert</button>
      <style>
        {`
          .rounded-popup {
            border-radius: 20px; /* ポップアップの丸みの半径を指定 */
          }

          .rounded-backdrop {
            border-radius: 20px; /* backdropの丸みの半径を指定 */
          }
        `}
      </style>
    </div>
  );
};

export default CustomAlert;
