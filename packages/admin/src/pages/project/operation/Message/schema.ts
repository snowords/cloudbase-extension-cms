export const TaskSchema: any = {
  fields: [
    {
      description: '【小程序名称】，点击 云开发静态网站 URL 打开小程序名称小程序，退订回T。',
      displayName: '短信内容',
      id: 'y0um9jhk9v9mrk424wbj95jleg2d2f8y',
      isRequired: true,
      max: 30,
      name: 'content',
      order: 0,
      type: 'String',
    },
    {
      displayName: '活动',
      description: '关联的活动',
      connectField: 'activityName',
      connectResource: 'b45a21d55ff939720430e24e0f94cb12',
      id: 'o91ouff816sbu0owdjqbcluira1enlqs',
      isRequired: true,
      name: 'activityId',
      order: 1,
      type: 'Connect',
    },
    {
      description: '以 , 号分割',
      displayName: '手机号码包',
      id: '70qq715n2ytm4dhp67to8j4xoou9kijt',
      isRequired: true,
      name: 'phoneNumberList',
      order: 2,
      type: 'MultiLineString',
    },
    {
      defaultValue: '',
      description: '发送状态',
      displayName: '发送状态',
      id: 'sp7adqpyejpwt86721plcvlk15ijnn6m',
      isHidden: false,
      isRequired: false,
      name: 'status',
      order: 3,
      type: 'string',
    },
    {
      defaultValue: 0,
      description: '电话号码数量',
      displayName: '发送用户数',
      id: 'tmaimgo7jtr9t3c7fiprvkl6knxb42ji',
      max: 1000,
      min: 0,
      name: 'total',
      order: 4,
      type: 'Number',
    },
    {
      dateFormatType: 'timestamp-ms',
      description: '创建时间',
      displayName: '创建时间',
      id: 'fmpx6prjehenfvl0v0amzo58ckwf7kqb',
      isRequired: true,
      name: 'createTime',
      order: 5,
      type: 'DateTime',
    },
  ],
  collectionName: 'wx-ext-cms-sms-tasks',
  displayName: '发送短信',
  _id: '21ded5cb5ff93faa0456bdef6be2a7d6',
}
