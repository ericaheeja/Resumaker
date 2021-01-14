import React, { useState } from "react";
import { Grid, Card, Image } from "semantic-ui-react";
import { Form, Input, Button, Upload } from "antd";
import bookitojpg from "../../../Assets/bookito.jpg";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { dummyRequest, getBase64, beforeUpload, uploadDataWithImg } from "../helper/imageUpload";

const PortfolioForm = (portfolios, setPortfolios) => {
  const [loading, setLoading] = useState(false);
  const [imageRef, setImageRef] = useState(null);
  const [originFile, setOriginFile] = useState(null);

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

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const addPortfolio = (value) => {
    const newPortfolio = {
      img: imageRef,
      name: value.name,
      period: value.period,
      description: value.description,
      originFile: originFile,
    };

    const newPortfolios = [...portfolios, newPortfolio];
    setPortfolios(newPortfolios);
    setImageRef(null);
    setOriginFile(null);
  };

  return (
    <Card key={portfolios.length}>
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
          <img src={imageRef} alt="avatar" style={{ width: "100%" }} />
        ) : (
          uploadButton
        )}
      </Upload>
      <Form className="portfolioForm" onFinish={addPortfolio}>
        <Card.Content>
          <Card.Header>
            <Form.Item label="portfolioName" name="name" className="portfolioName">
              <Input className="portfolioName" type="name" />
            </Form.Item>
          </Card.Header>
          <Card.Meta>
            <Form.Item label="portfolioPeriod" name="period" className="portfolioPeriod">
              <Input className="portfolioPeriod" type="period" />
            </Form.Item>
          </Card.Meta>
          <Card.Description>
            <Form.Item
              label="portfolioDescription"
              name="description"
              className="portfolioDescription"
            >
              <Input className="portfolioDescription" type="description" />
            </Form.Item>
          </Card.Description>
        </Card.Content>
        <Button className="saveBtn" htmlType="submit">
          Save
        </Button>
      </Form>
    </Card>
  );
};

export default function EditPortfolio() {
  const [portfolios, setPortfolios] = useState([]);

  const portfolioCard = (project) => {
    const removePortfolio = () => {
      const updatedPortfolio = portfolios.filter((e) => e.name !== project.name);
      setPortfolios(updatedPortfolio);
    };

    return (
      <Card key={project.name}>
        <Image src={project.img} height="280px" />
        <Card.Content>
          <Card.Header>{project.name}</Card.Header>
          <Card.Meta>{project.period}</Card.Meta>
          <Card.Description>{project.description}</Card.Description>
        </Card.Content>
        <button className="removeBtn" onClick={() => removePortfolio(project.name)}>
          Remove
        </button>
      </Card>
    );
  };

  return (
    <section className="PortfolioContainer" id="PORTFOLIO">
      <h2 className="portfolioTitle">PORTFOLIO</h2>
      <Button
        onClick={() => {
          uploadDataWithImg(portfolios, "kangmin", "portfolios");
        }}
      >
        haha
      </Button>
      <div className="portfolios">
        <Grid columns={3} textAlign="center">
          {portfolios.map((project) => {
            return portfolioCard(project);
          })}
          {PortfolioForm(portfolios, setPortfolios, portfolios.imageRef)}
        </Grid>
      </div>
    </section>
  );
}
