import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/b1d9b1404b254f514a7755a52c0cb2f9~c5_100x100.jpeg?x-expires=1659553200&x-signature=tFa5Mj%2FHKQo9F4GkjwLdv2Clq%2Bk%3D"
                alt="Tank"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Tank Tran Tien</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>tankgum</span>
            </div>
        </div>
    );
}

export default AccountItem;
