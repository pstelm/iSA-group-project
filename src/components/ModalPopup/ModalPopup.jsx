import React from 'react';
import styles from './ModalPopup.module.css';
import Popup from 'reactjs-popup';

const ModalPopup = ({
	triggerBtn,
	modalHeader,
	modalAdditionalInfo,
	handleConfirmCancelationClick,
}) => {
	return (
		<Popup trigger={triggerBtn} modal nested>
			{(close) => (
				<div className={styles.overlay}>
					<div className={styles.modal}>
						<button className={styles.close_sign} onClick={close}>
							&times;
						</button>
						<div className={styles.modal_header}>{modalHeader}</div>
						<p className={styles.modal_additional_info}>{modalAdditionalInfo}</p>
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
