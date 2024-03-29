import React, { FC } from 'react';
/* components */
import { Spinner } from 'components/Spinner';
/* modules */
import classnames from 'classnames';
/* assets */
/* types */
import { LikeButtonComponentProps } from './LikeButton.types';
/* styles */
import s from './LikeButton.module.scss';
import { AclService } from 'services/rbac';
import { Image } from 'components/Image';

export const LikeButton: FC<LikeButtonComponentProps> = props => {
    const {
        onChange,
        initialLikeState = false,
        loading,
        permission,
        ...restProps
    } = props;
    const rootClassName = classnames(s.like, { [s.black]: initialLikeState });

    const toggleLike = () => {
        onChange(initialLikeState);
    };

    if (loading) {
        return <Spinner />;
    }

    return (
        <AclService permission={permission}>
            <Image
                className={rootClassName}
                src={'/icons/like.svg'}
                onClick={toggleLike}
                {...restProps}
            />
        </AclService>
    );
};
