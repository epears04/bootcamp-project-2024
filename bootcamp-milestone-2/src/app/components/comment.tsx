type IComment = {
	user: string;
	comment: string;
	time: Date;
}

type CommentProps = {
    comment: IComment;
}


{/* Modularizing code into seperate functions is useful.
		Makes your code look nicer and allows for better readability.
	*/}
function parseCommentTime(time: Date){
    const parsedDate = new Date(time);
    
    if(isNaN(parsedDate.getTime())) {
        return "Invalid Date";
    }
    
	const dateOptions: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    const formattedDate = new Intl.DateTimeFormat("en-US", dateOptions).format(parsedDate);
    const timeOptions: Intl.DateTimeFormatOptions = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    }
    const formattedTime = new Intl.DateTimeFormat("en-US", timeOptions).format(parsedDate);
    return `${formattedDate} at ${formattedTime}`;
}

function Comment({ comment }: CommentProps) {
    return (
        <div className="p-4 border-2 rounded-lg border-darkest-blue">
            <h4 className="text-lg font-semibold text-gray-800">{comment.user}</h4>
            <p className="text-gray-700">{comment.comment}</p>
            <span className="text-sm text-gray-600">{parseCommentTime(comment.time)}</span>
        </div>
    );
}

export default Comment;