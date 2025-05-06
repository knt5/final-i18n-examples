import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { HapticTab } from '@/components/ui/tabs/HapticTab';
import { IconSymbol } from '@/components/ui/icons/IconSymbol';
import TabBarBackground from '@/components/ui/tabs/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { getT, T, useTranslation } from 'final-i18n';
import { translations } from './BottomTabBar.i18n';

function getTitle(routeName: string, t: T): string {
	switch (routeName) {
		case 'index':
			return t('home');
		case 'explore':
			return t('explore');
		default:
			return routeName;
	}
}

export function BottomTabBar() {
	const colorScheme = useColorScheme();
	const { t } = useTranslation(translations);

	return (
		<Tabs
			// screenOptions には object ではなく関数を渡すことで、
			// 各画面内で navigation.setOptions が呼ばれた際にコールされ、
			// タブ title に選択した言語の title を渡すようにしている。
			// こうしないと _layout.tsx は state 更新されても再実行されないため、
			// タブ title が更新されない。
			screenOptions={({ route }) => {
				// _layout.tsx は state 更新されても再描画しないため、
				// useTranslation では最新の正しい t を取得することができない。
				// このため、推奨はしていないが getT で改めてこの関数が呼ばれた時点の
				// 最新の正しい t を取得している。
				const { t } = getT(translations);

				return {
					tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
					headerShown: false,
					tabBarButton: HapticTab,
					tabBarBackground: TabBarBackground,
					// 各画面で navigation.setOptions が呼ばれた際に
					// 改めて取得した t で route name からタブ title を指定している。
					tabBarLabel: getTitle(route.name, t),
					tabBarStyle: Platform.select({
						ios: {
							// Use a transparent background on iOS to show the blur effect
							position: 'absolute',
						},
						default: {},
					}),
				};
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: t('home'),
					tabBarIcon: ({ color }) => (
						<IconSymbol size={28} name="house.fill" color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="explore"
				options={{
					title: t('explore'),
					tabBarIcon: ({ color }) => (
						<IconSymbol size={28} name="paperplane.fill" color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
