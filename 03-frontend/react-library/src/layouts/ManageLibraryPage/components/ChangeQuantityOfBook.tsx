import { useEffect, useState } from "react";
import BookModel from "../../../models/BookModel";
import { useAuth0 } from "@auth0/auth0-react";

interface ChangeQuantityProps {
    book: BookModel;
    deleteBook: () => void;
}

export const ChangeQuantityOfBook: React.FC<ChangeQuantityProps> = (props) => {
    const { getAccessTokenSilently } = useAuth0();
    const [quantity, setQuantity] = useState<number>(0);
    const [remaining, setRemaining] = useState<number>(0);

    useEffect(() => {
        setQuantity(props.book.copies ?? 0);
        setRemaining(props.book.copiesAvailable ?? 0);
    }, [props.book]);

    async function increaseQuantity() {
        const url = `${process.env.REACT_APP_API}/admin/secure/increase/book/quantity?bookId=${props.book?.id}`;
        const accessToken = await getAccessTokenSilently();
        const requestOptions = {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        };

        const res = await fetch(url, requestOptions);
        if (!res.ok) throw new Error('Something went wrong!');
        setQuantity(quantity + 1);
        setRemaining(remaining + 1);
    }

    async function decreaseQuantity() {
        const url = `${process.env.REACT_APP_API}/admin/secure/decrease/book/quantity?bookId=${props.book?.id}`;
        const accessToken = await getAccessTokenSilently();
        const requestOptions = {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        };

        const res = await fetch(url, requestOptions);
        if (!res.ok) throw new Error('Something went wrong!');
        setQuantity(quantity - 1);
        setRemaining(remaining - 1);
    }

    async function deleteBook() {
        const url = `${process.env.REACT_APP_API}/admin/secure/delete/book?bookId=${props.book?.id}`;
        const accessToken = await getAccessTokenSilently();
        const requestOptions = {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        };

        const res = await fetch(url, requestOptions);
        if (!res.ok) throw new Error('Something went wrong!');
        props.deleteBook();
    }

    return (
        <div className='card mt-3 shadow p-3 mb-3 bg-body rounded'>
            {/* ... your JSX remains unchanged ... */}
        </div>
    );
};
