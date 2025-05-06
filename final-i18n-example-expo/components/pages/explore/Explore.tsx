import { useNavigation } from 'expo-router';
import { useTranslation } from 'final-i18n';
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { ParallaxScrollView } from '@/components/ui/scroll/ParallaxScrollView';
import { ThemedText } from '@/components/ui/themed/ThemedText';
import { ThemedView } from '@/components/ui/themed/ThemedView';
import { IconSymbol } from '@/components/ui/icons/IconSymbol';
import { translations } from './Explore.i18n';

export function Explore() {
	const { t } = useTranslation(translations);
	const navigation = useNavigation();

	useEffect(() => {
		// Tabs の screenOptions 関数の実行をトリガーするために必要
		navigation.setOptions({});
	}, [navigation, t]);

	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#d0d0d0', dark: '#353636' }}
			headerImage={
				<IconSymbol
					size={310}
					color="#808080"
					name="chevron.left.forwardslash.chevron.right"
					style={styles.headerImage}
				/>
			}
		>
			<ThemedView style={styles.titleContainer}>
				<ThemedText type="title">{t('title')}</ThemedText>
			</ThemedView>
			<ThemedText>{t('message')}</ThemedText>
		</ParallaxScrollView>
	);
}

const styles = StyleSheet.create({
	headerImage: {
		color: '#808080',
		bottom: -90,
		left: -35,
		position: 'absolute',
	},
	titleContainer: {
		flexDirection: 'row',
		gap: 8,
	},
});
