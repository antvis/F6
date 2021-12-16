import React from 'react';
import SEO from '@antv/gatsby-theme-antv/site/components/Seo';
import { useTranslation } from 'react-i18next';
import Banner from '@antv/gatsby-theme-antv/site/components/Banner';
import Companies from '@antv/gatsby-theme-antv/site/components/Companies';
import Features from '@antv/gatsby-theme-antv/site/components/Features';
import Cases from '@antv/gatsby-theme-antv/site/components/Cases';
import './index.less';

const IndexPage = () => {
  const { t, i18n } = useTranslation();

  const coverImage = (
    <img
      style={{ width: '115%', marginLeft: '-8%', marginTop: '7%' }}
      src="https://gw.alipayobjects.com/mdn/rms_5c3b4a/afts/img/A*C_4mRLBbczcAAAAAAAAAAAAAARQnAQ"
    />
  ); //BannerSVG();

  const features = [
    {
      icon: 'https://gw.alipayobjects.com/mdn/rms_5c3b4a/afts/img/A*wgmPSIVhEGsAAAAAAAAAAAAAARQnAQ',
      title: t('跨端 · 全面'),
      description: t('F6 是一个专注于关系数据的、完备的移动端图可视化引擎。'),
    },
    {
      icon: 'https://gw.alipayobjects.com/mdn/rms_5c3b4a/afts/img/A*7FF1Q7ioaKYAAAAAAAAAAAAAARQnAQ',
      title: t('易用 · 流畅'),
      description: t('针对移动端场景定向优化，不论是小程序还是移动端网页都可以获得极致体验。'),
    },
    {
      icon: 'https://gw.alipayobjects.com/mdn/rms_5c3b4a/afts/img/A*rb7FRqSOc7AAAAAAAAAAAAAAARQnAQ',
      title: t('轻量 · 强悍'),
      description: t(
        '体积小巧，但能力突出。精心设计的简单、灵活、高可拓展的接口，满足你的无限创意。',
      ),
    },
  ];

  const companies = [
    {
      name: '支付宝',
      img: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*6u3hTpsd7h8AAAAAAAAAAABkARQnAQ',
    },
    {
      name: '阿里云',
      img: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Z1NnQ6L4xCIAAAAAAAAAAABkARQnAQ',
    },
    {
      name: '天猫',
      img: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*BQrxRK6oemMAAAAAAAAAAABkARQnAQ',
    },
    {
      name: '菜鸟',
      img: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*SqmTSqj4FjEAAAAAAAAAAABkARQnAQ',
    },
    {
      name: '网商银行',
      img: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Fw8HTbFgUdAAAAAAAAAAAABkARQnAQ',
    },
    {
      name: '盒马',
      img: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*ePJMQZCb8vkAAAAAAAAAAABkARQnAQ',
    },
    {
      name: 'Geabase',
      img: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Vi-pSbxeraIAAAAAAAAAAABkARQnAQ',
    },
    {
      name: '滴滴',
      img: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*3UihQLQSrXoAAAAAAAAAAABkARQnAQ',
    },
  ];

  const cases = [
    {
      logo: 'https://gw.alipayobjects.com/mdn/rms_dd275a/afts/img/A*BBUESKOhtcsAAAAAAAAAAAAAARQnAQ',
      title: t('芝麻企业信用'),
      isAppLogo: true,
      description: t(
        '帮助中小微企业建立及展示可信的信用档案，通过评级等信用服务让商业合作更简单 。',
      ),
      image:
        'https://gw.alipayobjects.com/mdn/rms_5c3b4a/afts/img/A*Elw0QZx-wOgAAAAAAAAAAAAAARQnAQ',
    },
    {
      logo: 'https://gw.alipayobjects.com/mdn/rms_5c3b4a/afts/img/A*-SOyRJG53z0AAAAAAAAAAAAAARQnAQ',
      title: t('鹰寻'),
      isAppLogo: true,
      description: t('B2B智能营销解决方案-帮助B类企业打造招投标信息处理最短路径。'),
      image:
        'https://gw.alipayobjects.com/mdn/rms_5c3b4a/afts/img/A*XsxRRZ8oDVsAAAAAAAAAAAAAARQnAQ',
    },
  ];

  const bannerButtons = [
    {
      text: t('官方示例'),
      link: `/${i18n.language}/docs/examples/tree/compactBox`,
      type: 'primary',
    },
    {
      text: t('开始使用'),
      link: `/${i18n.language}/docs/manual/introduction`,
    },
  ];

  const insNotifications = [
    {
      type: t('推荐'),
      title: t('图可视分析如此简单'),
      date: '2020.11.22',
      link: 'https://www.yuque.com/antv/g6-blog/zgb5d7',
    },
    {
      type: t('推荐'),
      title: t('G6 4.2.0 开放 · 生态'),
      date: '2020.03.12',
      link: 'https://www.yuque.com/antv/g6-blog/xpu1zo',
    },
  ];

  return (
    <>
      <SEO title={t('F6 移动端图可视化引擎')} titleSuffix="AntV" lang={i18n.language} />
      <Banner
        notifications={insNotifications}
        coverImage={coverImage}
        title={t('F6 移动端图可视化引擎')}
        description={t(
          'F6是一款可以快速、流畅运行于移动设备中的图可视化引擎，通过丰富的布局、组件及分析能力，帮助用户落地跨平台的图可视化应用解决方案。',
        )}
        className="banner"
        buttons={bannerButtons}
      />
      <Features features={features} style={{ width: '100%' }} />
      <Cases cases={cases} />
      <Companies title={t('感谢信赖')} companies={companies} />
    </>
  );
};

export default IndexPage;
