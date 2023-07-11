import React from 'react';
import styles from './ModalPopup.module.css';
import Popup from 'reactjs-popup';
// import { toast } from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';

const ModalPopup = ({
	triggerBtn,
	modalHeader,
	modalAdditionalInfo,
	handleConfirmCancelationClick,
	// pathName,
}) => {
	// const navigate = useNavigate();

	return (
		<Popup
			trigger={
				triggerBtn
				// <button type='button' className={styles.cancel_btn}>
				// 	Anuluj
				// </button>
			}
			modal
			nested
		>
			{(close) => (
				<div className={styles.overlay}>
					<div className={styles.modal}>
						<button className={styles.close_sign} onClick={close}>
							&times;
						</button>
						<div className={styles.modal_header}>
							{modalHeader}
							{/* Czy na pewno chcesz anulować edycję? */}
						</div>
						<p className={styles.modal_additional_info}>
							{modalAdditionalInfo}
							{/* Spowoduje to usunięcie wszystkich wprowadzonych danych. */}
						</p>
						<div className={styles.actions}>
							<button
								className={`${styles.actions_btn} + ${styles.actions_btn_cancel}`}
								onClick={() => close()}
							>
								Powrót
							</button>
							<button
								className={`${styles.actions_btn} + ${styles.actions_btn_confirm}`}
								onClick={() => {
									handleConfirmCancelationClick();
									// navigate('/userprofile');
									// navigate(pathName);
									// toast.error('Twoje zmiany nie zostały zapisane');
									close();
								}}
							>
								Potwierdź
							</button>
						</div>
					</div>
				</div>
			)}
		</Popup>
	);
};

export default ModalPopup;
