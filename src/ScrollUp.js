import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollUp({ history, children }) {
    useEffect(() => {
        const onTop = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            onTop();
        }
    }, []);

    return (
        <div>
            {children}
        </div>
    )
};

export default withRouter(ScrollUp);
