import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<div>
					<h4>Warning!!</h4>
					Are you sure?
				</div>
			</ApprovalCard>			

			<ApprovalCard>
				<CommentDetail avatar={faker.image.avatar()} author="sam" timeago="today at 2:00AM" comment="yay it's up" />
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail avatar={faker.image.avatar()} author="jai" timeago="today at 4:25PM" comment="Am good!!" />
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail avatar={faker.image.avatar()} author="raj" timeago="yesterday 3:16AM" comment="yes, it's cool" />
			</ApprovalCard>
		</div>
	);
}

ReactDOM.render(<App/>, document.querySelector('#root'));
