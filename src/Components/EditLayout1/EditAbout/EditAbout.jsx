import React, { useState } from "react";
import { Card, Grid } from "semantic-ui-react";
import sampleMe from "../../../Assets/sample.jpg";
import { LoadingOutlined, PlusOutlined, InboxOutlined } from "@ant-design/icons";
import { Form, Input, Button, Upload, Image, message } from "antd";
import { dummyRequest, getBase64, beforeUpload, uploadDataWithImg } from "../helper/imageUpload";
import ImgCrop from "antd-img-crop";

export default function EditAbout() {
  const [selfIntro, setSelfIntro] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageRef, setImageRef] = useState(null);
  const [originFile, setOriginFile] = useState(null);
  const [numOfColumns, setNumOfColumns] = useState(getInitialNumOfColumns());

  const handleChange = (photo) => {
    if (photo.file.status === "uploading") {
      setLoading(true);
    }
    if (photo.file.status === "done") {
      // Get this url from response in real world.
      getBase64(photo.file.originFileObj, (imageUrl) => {
        setImageRef(imageUrl);
        setOriginFile(photo.file);
        setLoading(false);
      });
    }
  };

  const props = {
    name: "file",
    multiple: false,
    customRequest: { dummyRequest },
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const { Dragger } = Upload;

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const createIntro = (values) => {
    const newSelfIntro = {
      img: imageRef,
      introduction: values.introduction,
      originFile: originFile,
    };
    uploadDataWithImg(newSelfIntro, "kangmin", "selfIntro");
  };

  const { TextArea } = Input;

  function getInitialNumOfColumns() {
    let initialNumOfColumns = window.innerWidth < 1024 ? 1 : 2;
    return initialNumOfColumns;
  }

  const resizeScreen = () => {
    window.innerWidth >= 1024 ? setNumOfColumns(2) : setNumOfColumns(1);
  };

  window.addEventListener("resize", resizeScreen);

  return (
    <section className="AboutContainer" id="ABOUT">
      <h2 className="aboutMeTitle">About Me</h2>
      <div className="aboutMeContents">
        <Form className="addForm" onFinish={createIntro}>
          <Grid columns={numOfColumns} padded="horizontally">
            <Grid.Column>
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                customRequest={dummyRequest}
                beforeUpload={beforeUpload}
                onChange={handleChange}
              >
                {imageRef !== null ? (
                  <Image id="aboutMeImage" src={imageRef} alt="avatar" style={{ width: "100%" }} />
                ) : (
                  uploadButton
                )}
              </Upload>
            </Grid.Column>
            <Grid.Column>
              <Card.Content className="textBox">
                <Form.Item label="Introduction" name="description" className="formDescription">
                  <TextArea className="clientInput" type="description" />
                </Form.Item>
                <Form.Item></Form.Item>
              </Card.Content>
            </Grid.Column>
          </Grid>
          <Dragger
            {...props}
            style={{ textAlign: "center", width: "80%", margin: "auto", border: "1px solid white" }}
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibit from uploading company data or
              other band files
            </p>
          </Dragger>
          <Button className="saveBtn" htmlType="submit">
            Save
          </Button>
        </Form>
      </div>
    </section>
  );
}
