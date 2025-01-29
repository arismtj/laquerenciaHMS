import { defineField } from "sanity";

const account = {
name:"account",
title: 'Account',
type: 'document',
fields:[
    defineField({
        name:"provideType",
        type:'string'
    }),

    defineField({
        name:"provideId",
        type:'string'
    }),

    defineField({
        name:"provideAccountId",
        type:'string'
    }),

    defineField({
        name:"refreshToken",
        type:'string'
    }),

    defineField({
        name:"accessToken",
        type:'string'
    }),

    defineField({
        name:"accessTokenExpires",
        type:'number'
    }),

    defineField({
        name:'user',
        title:"user",
        type: 'reference',
        to:{type: 'user'},
    }),
  ],
};

export default account;