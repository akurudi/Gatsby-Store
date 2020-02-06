import React from 'react';
import { Row, Col } from 'antd';
import { documentToReactComponents as ContentfulRichText} from '@contentful/rich-text-react-renderer';

export default props => {
  return (
    <Row justify="center" type="flex">
				<Col xs={20}>{ContentfulRichText(props.children.childContentfulFaQsContentRichTextNode.json)}</Col>
    </Row>
  )
}