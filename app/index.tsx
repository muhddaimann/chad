import {
  Avatar,
  AvatarFallback,
  AvatarFallbackText,
  AvatarImage,
  Badge,
  BadgeText,
  Button,
  Checkbox,
  Icon,
  Progress,
  Radio,
  Spinner,
  Switch,
  Text,
  TextArea,
  TextInput,
} from '@/components/ui';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  EmptyState,
  EmptyStateDescription,
  EmptyStateIcon,
  EmptyStateTitle,
  Modal,
  ModalContent,
  ModalView,
  Skeleton,
} from '@/components/uii';
import { Stack } from 'expo-router';
import { MoonStarIcon } from 'lucide-react-native';
import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { useNotification } from '@/contexts/notificationContext';

export default function Screen() {
  const [isChecked, setIsChecked] = React.useState(false);
  const [radioValue, setRadioValue] = React.useState('one');
  const [isSwitched, setIsSwitched] = React.useState(false);
  const [progress, setProgress] = React.useState(13);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const { showToast, showAlert } = useNotification();

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Stack.Screen />
      <ScrollView contentContainerClassName="p-4">
        <View className="flex-1 items-start justify-start gap-8 p-4">
          <Text variant="h1">Components Demo</Text>
          <Text variant="h2">UI Components</Text>

          <View className="gap-4">
            <Text variant="h3">Button</Text>
            <View className="flex-row gap-2">
              <Button onPress={() => showToast('Default Toast')}>Default</Button>
              <Button variant="secondary" onPress={() => showToast('Success Toast', 'success')}>
                Secondary
              </Button>
              <Button variant="destructive" onPress={() => showToast('Error Toast', 'error')}>
                Destructive
              </Button>
              <Button variant="outline" onPress={() => showToast('Warning Toast', 'warning')}>
                Outline
              </Button>
            </View>
          </View>

          <View className="gap-4">
            <Text variant="h3">TextInput</Text>
            <TextInput placeholder="Default TextInput" />
            <TextInput variant="filled" placeholder="Filled TextInput" />
          </View>

          <View className="gap-4">
            <Text variant="h3">TextArea</Text>
            <TextArea placeholder="Default TextArea" />
            <TextArea variant="filled" placeholder="Filled TextArea" />
          </View>

          <View className="gap-4">
            <Text variant="h3">Checkbox</Text>
            <View className="flex-row items-center gap-2">
              <Checkbox checked={isChecked} onPress={() => setIsChecked(!isChecked)} />
              <Text>Accept terms and conditions</Text>
            </View>
          </View>

          <View className="gap-4">
            <Text variant="h3">Radio Group</Text>
            <View className="flex-row gap-4">
              <View className="flex-row items-center gap-2">
                <Radio checked={radioValue === 'one'} onPress={() => setRadioValue('one')} />
                <Text>Option One</Text>
              </View>
              <View className="flex-row items-center gap-2">
                <Radio checked={radioValue === 'two'} onPress={() => setRadioValue('two')} />
                <Text>Option Two</Text>
              </View>
            </View>
          </View>

          <View className="gap-4">
            <Text variant="h3">Switch</Text>
            <View className="flex-row items-center gap-2">
              <Switch value={isSwitched} onValueChange={() => setIsSwitched(!isSwitched)} />
              <Text>Enable notifications</Text>
            </View>
          </View>

          <View className="gap-4">
            <Text variant="h3">Badge</Text>
            <View className="flex-row gap-2">
              <Badge>
                <BadgeText>Default</BadgeText>
              </Badge>
              <Badge variant="secondary">
                <BadgeText>Secondary</BadgeText>
              </Badge>
              <Badge variant="destructive">
                <BadgeText>Destructive</BadgeText>
              </Badge>
              <Badge variant="outline">
                <BadgeText>Outline</BadgeText>
              </Badge>
            </View>
          </View>

          <View className="gap-4">
            <Text variant="h3">Avatar</Text>
            <Avatar>
              <AvatarImage source={{ uri: 'https://github.com/shadcn.png' }} />
              <AvatarFallback>
                <AvatarFallbackText>CN</AvatarFallbackText>
              </AvatarFallback>
            </Avatar>
          </View>

          <View className="gap-4">
            <Text variant="h3">Spinner</Text>
            <Spinner />
          </View>

          <View className="gap-4">
            <Text variant="h3">Progress</Text>
            <Progress value={progress} />
          </View>

          <View className="gap-4">
            <Text variant="h3">Card</Text>
            <Card>
              <CardHeader>
                <CardTitle>
                  <Text>Card Title</Text>
                </CardTitle>
                <CardDescription>
                  <Text>Card Description</Text>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Text>Card Content</Text>
              </CardContent>
              <CardFooter>
                <Button onPress={() => showToast('Card Action Done', 'success')}>
                  <Text>Do Action</Text>
                </Button>
              </CardFooter>
            </Card>
          </View>

          <View className="gap-4">
            <Text variant="h3">Modal</Text>
            <Button onPress={() => setIsModalOpen(true)}>
              <Text>Open Modal</Text>
            </Button>
            <Modal
              visible={isModalOpen}
              transparent
              animationType="fade"
              onRequestClose={() => setIsModalOpen(false)}>
              <ModalContent>
                <ModalView>
                  <Text variant="h3">Modal Title</Text>
                  <Text>This is the modal content.</Text>
                  <View className="mt-4 flex-row gap-2">
                    <Button variant="outline" onPress={() => setIsModalOpen(false)}>
                      <Text>Close</Text>
                    </Button>
                    <Button
                      onPress={() =>
                        showAlert(
                          'Are you absolutely sure?',
                          'This action cannot be undone. This will permanently delete your account and remove your data from our servers.'
                        )
                      }>
                      <Text>Open Alert</Text>
                    </Button>
                  </View>
                </ModalView>
              </ModalContent>
            </Modal>
          </View>

          <View className="gap-4">
            <Text variant="h3">AlertDialog</Text>
            <Button onPress={() => showAlert('Delete item?', 'This cannot be undone. Continue?')}>
              <Text>Show Alert</Text>
            </Button>
          </View>

          <View className="gap-4">
            <Text variant="h3">Toast</Text>
            <Button onPress={() => showToast('Item saved successfully!', 'success')}>
              <Text>Show Toast</Text>
            </Button>
          </View>

          <View className="gap-4">
            <Text variant="h3">Skeleton</Text>
            <View className="flex-row items-center gap-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <View className="gap-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </View>
            </View>
          </View>

          <View className="gap-4">
            <Text variant="h3">Empty State</Text>
            <EmptyState>
              <EmptyStateIcon>
                <Icon as={MoonStarIcon} size={40} />
              </EmptyStateIcon>
              <EmptyStateTitle>
                <Text>No Content</Text>
              </EmptyStateTitle>
              <EmptyStateDescription>
                <Text>There is no content to display here.</Text>
              </EmptyStateDescription>
            </EmptyState>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
